import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { throwSupabaseError } from './supabase-error.util';
import { Database } from './supabase.types';

type PublicTables = Database['public']['Tables'];
type TableName = keyof PublicTables;
type TableNameWithId = {
  [Table in TableName]: 'id' extends keyof PublicTables[Table]['Row']
    ? Table
    : never;
}[TableName];

@Injectable()
export abstract class SupabaseCrudService<
  TTable extends TableNameWithId,
  TEntity,
  TCreateDto extends PublicTables[TTable]['Insert'] = PublicTables[TTable]['Insert'],
  TUpdateDto extends PublicTables[TTable]['Update'] = PublicTables[TTable]['Update'],
> {
  protected abstract table: TTable;
  protected abstract singularResource: string;
  protected abstract pluralResource: string;
  protected selectQuery = '*';

  constructor(protected readonly supabase: SupabaseService) {}

  protected formatResource(resource: string): string {
    return resource.charAt(0).toUpperCase() + resource.slice(1);
  }

  async create(dto: TCreateDto): Promise<TEntity> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table as never)
      .insert(dto as never)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'cadastrar');
    if (!data) {
      throw new InternalServerErrorException(
        'O registro não foi retornado após o cadastro.',
      );
    }

    return data as TEntity;
  }

  async findAll(): Promise<TEntity[]> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table as never)
      .select(this.selectQuery);

    if (error) throwSupabaseError(error, this.pluralResource, 'buscar');

    return (data ?? []) as TEntity[];
  }

  async findOne(id: number): Promise<TEntity> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table as never)
      .select(this.selectQuery)
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'buscar');
    if (!data) {
      throw new NotFoundException(
        `${this.formatResource(this.singularResource)} com ID ${id} não foi encontrado.`,
      );
    }

    return data as TEntity;
  }

  async update(id: number, dto: TUpdateDto): Promise<TEntity> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table as never)
      .update(dto as never)
      .eq('id', id)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'atualizar');
    if (!data) {
      throw new NotFoundException(
        `${this.formatResource(this.singularResource)} com ID ${id} não foi encontrado.`,
      );
    }

    return data as TEntity;
  }

  async remove(id: number): Promise<TEntity> {
    const { data, error } = await this.supabase
      .getClient()
      .from(this.table as never)
      .delete()
      .eq('id', id)
      .select(this.selectQuery)
      .single();

    if (error) throwSupabaseError(error, this.singularResource, 'remover');
    if (!data) {
      throw new NotFoundException(
        `${this.formatResource(this.singularResource)} com ID ${id} não foi encontrado para remoção.`,
      );
    }

    return data as TEntity;
  }
}
