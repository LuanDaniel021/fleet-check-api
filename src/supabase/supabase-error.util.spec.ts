import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { throwSupabaseError } from './supabase-error.util';

describe('throwSupabaseError', () => {
  it('converts a missing row error to not found', () => {
    expect(() =>
      throwSupabaseError({ code: 'PGRST116' }, 'o caminhão', 'buscar'),
    ).toThrow(NotFoundException);
  });

  it('converts a duplicate error to conflict', () => {
    expect(() =>
      throwSupabaseError({ code: '23505' }, 'o pneu', 'cadastrar'),
    ).toThrow(ConflictException);
  });

  it('converts a foreign key error to bad request', () => {
    expect(() =>
      throwSupabaseError({ code: '23503' }, 'a viagem', 'cadastrar'),
    ).toThrow(BadRequestException);
  });

  it('converts a permission error to forbidden', () => {
    expect(() =>
      throwSupabaseError({ code: '42501' }, 'o IPVA', 'buscar'),
    ).toThrow(ForbiddenException);
  });

  it('hides unexpected database error details', () => {
    let thrown: unknown;

    try {
      throwSupabaseError(
        { code: 'XX000', message: 'internal database secret' },
        'o CRLV',
        'buscar',
      );
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(InternalServerErrorException);
    expect((thrown as InternalServerErrorException).getResponse()).toEqual({
      statusCode: 500,
      message: 'Não foi possível buscar o CRLV.',
      error: 'Internal Server Error',
    });
  });
});
