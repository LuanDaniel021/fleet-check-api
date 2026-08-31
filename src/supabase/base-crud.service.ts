import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { throwSupabaseError } from './supabase-error.util';

@Injectable()
export abstract class BaseCrudService<T> {
  protected abstract table: string;
  protected abstract singularResource: string;
  protected abstract pluralResource: string;
  protected selectQuery = '*';

  constructor(protected readonly supabase: SupabaseService) {}

  async create(dto: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table)
      .insert(dto)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'cadastrar');
    if (!data) {
      throw new InternalServerErrorException(
        `O registro não foi retornado após o cadastro.`,
      );
    }

    return data as T;
  }

  async findAll(): Promise<T[]> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table)
      .select(this.selectQuery);

    if (error) throwSupabaseError(error, this.pluralResource, 'buscar');

    return (data ?? []) as T[];
  }

  async findOne(id: number): Promise<T> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table)
      .select(this.selectQuery)
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'buscar');
    if (!data) {
      throw new NotFoundException(
        `${this.singularResource.charAt(0).toUpperCase() + this.singularResource.slice(1)} com ID ${id} não encontrado.`,
      );
    }

    return data as T;
  }

  async update(id: number, dto: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table)
      .update(dto)
      .eq('id', id)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'atualizar');
    if (!data) {
      throw new NotFoundException(
        `${this.singularResource.charAt(0).toUpperCase() + this.singularResource.slice(1)} com ID ${id} não encontrado.`,
      );
    }

    return data as T;
  }

  async remove(id: number): Promise<T> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table)
      .delete()
      .eq('id', id)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'remover');
    if (!data) {
      throw new NotFoundException(
        `${this.singularResource.charAt(0).toUpperCase() + this.singularResource.slice(1)} com ID ${id} não encontrado para remoção.`,
      );
    }

    return data as T;
  }
}
