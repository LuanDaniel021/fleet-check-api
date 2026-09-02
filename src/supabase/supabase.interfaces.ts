import {
  TablesInsert,
  TablesUpdate,
  Tables,
} from './supabase.types';

/**
 * Interface genérica para DTOs de criação
 * Implementar: implements CreateDto<'nome_tabela'>
 */
export interface CreateDto<T extends keyof any> {
  [K: string]: any;
}

/**
 * Interface genérica para DTOs de atualização
 * Implementar: implements UpdateDto<'nome_tabela'>
 */
export interface UpdateDto<T extends keyof any> {
  [K: string]: any;
}

/**
 * Interface que herda das tabelas do Supabase com tipagem genérica
 * Use para criar DTOs com tipos específicos da tabela
 */
export interface ICreateDto<TableName extends keyof any>
  extends CreateDto<TableName>,
    TablesInsert<TableName> {}

/**
 * Interface que herda das tabelas do Supabase para Update
 * Use para criar DTOs com tipos específicos da tabela
 */
export interface IUpdateDto<TableName extends keyof any>
  extends UpdateDto<TableName>,
    Partial<TablesUpdate<TableName>> {}
