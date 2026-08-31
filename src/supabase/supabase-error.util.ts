import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

interface SupabaseError {
  code?: string;
  message?: string;
}

function formatResource(resource: string): string {
  const trimmed = resource.trim();

  if (!trimmed) {
    return resource;
  }

  if (/^(o|a|os|as|um|uma|uns|umas)\b/i.test(trimmed)) {
    return trimmed;
  }

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function throwSupabaseError(
  error: SupabaseError,
  resource: string,
  operation: string,
): never {
  const formattedResource = formatResource(resource);

  if (error.code === 'PGRST116') {
    throw new NotFoundException(`${formattedResource} não foi encontrado.`);
  }

  if (error.code === '23505') {
    throw new ConflictException(
      `Não foi possível ${operation} ${formattedResource}: registro duplicado.`,
    );
  }

  if (error.code === '23503' || error.code?.startsWith('22')) {
    throw new BadRequestException(
      `Não foi possível ${operation} ${formattedResource}: dados inválidos.`,
    );
  }

  if (error.code === '42501') {
    throw new ForbiddenException(
      `Você não tem permissão para ${operation} ${formattedResource}.`,
    );
  }

  throw new InternalServerErrorException(
    `Não foi possível ${operation} ${formattedResource}.`,
  );
}
