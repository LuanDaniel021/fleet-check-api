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

export function throwSupabaseError(
  error: SupabaseError,
  resource: string,
  operation: string,
): never {
  if (error.code === 'PGRST116') {
    throw new NotFoundException(`${resource} não encontrado.`);
  }

  if (error.code === '23505') {
    throw new ConflictException(
      `Não foi possível ${operation} ${resource}: registro duplicado.`,
    );
  }

  if (error.code === '23503' || error.code?.startsWith('22')) {
    throw new BadRequestException(
      `Não foi possível ${operation} ${resource}: dados inválidos.`,
    );
  }

  if (error.code === '42501') {
    throw new ForbiddenException(
      `Você não tem permissão para ${operation} ${resource}.`,
    );
  }

  throw new InternalServerErrorException(
    `Não foi possível ${operation} ${resource}.`,
  );
}
