export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.17';
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      caminhao: {
        Row: {
          crlv_id: number | null;
          id: number;
          km_atual: number | null;
          motorista_id: number | null;
          status: string | null;
        };
        Insert: {
          crlv_id?: number | null;
          id?: number;
          km_atual?: number | null;
          motorista_id?: number | null;
          status?: string | null;
        };
        Update: {
          crlv_id?: number | null;
          id?: number;
          km_atual?: number | null;
          motorista_id?: number | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'caminhao_crlv_id_fkey';
            columns: ['crlv_id'];
            isOneToOne: false;
            referencedRelation: 'crlv';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'caminhao_motorista_id_fkey';
            columns: ['motorista_id'];
            isOneToOne: false;
            referencedRelation: 'motorista';
            referencedColumns: ['id'];
          },
        ];
      };
      crlv: {
        Row: {
          ano_fabricacao: number | null;
          ano_modelo: number | null;
          chassi: string;
          crv: string | null;
          especie: string | null;
          exercicio: number | null;
          id: number;
          marca: string | null;
          modelo: string | null;
          placa: string;
          renavam: string | null;
          tipo: string | null;
          uf: string | null;
        };
        Insert: {
          ano_fabricacao?: number | null;
          ano_modelo?: number | null;
          chassi: string;
          crv?: string | null;
          especie?: string | null;
          exercicio?: number | null;
          id?: number;
          marca?: string | null;
          modelo?: string | null;
          placa: string;
          renavam?: string | null;
          tipo?: string | null;
          uf?: string | null;
        };
        Update: {
          ano_fabricacao?: number | null;
          ano_modelo?: number | null;
          chassi?: string;
          crv?: string | null;
          especie?: string | null;
          exercicio?: number | null;
          id?: number;
          marca?: string | null;
          modelo?: string | null;
          placa?: string;
          renavam?: string | null;
          tipo?: string | null;
          uf?: string | null;
        };
        Relationships: [];
      };
      ipva: {
        Row: {
          ano_referencia: number | null;
          crlv_id: number | null;
          data_vencimento: string | null;
          id: number;
          status: string | null;
          valor: number | null;
        };
        Insert: {
          ano_referencia?: number | null;
          crlv_id?: number | null;
          data_vencimento?: string | null;
          id?: number;
          status?: string | null;
          valor?: number | null;
        };
        Update: {
          ano_referencia?: number | null;
          crlv_id?: number | null;
          data_vencimento?: string | null;
          id?: number;
          status?: string | null;
          valor?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'ipva_crlv_id_fkey';
            columns: ['crlv_id'];
            isOneToOne: false;
            referencedRelation: 'crlv';
            referencedColumns: ['id'];
          },
        ];
      };
      manutencao: {
        Row: {
          caminhao_id: number | null;
          custo: number | null;
          data_manutencao: string | null;
          id: number;
          km_realizacao: number | null;
          observacoes: string | null;
          tipo: string | null;
        };
        Insert: {
          caminhao_id?: number | null;
          custo?: number | null;
          data_manutencao?: string | null;
          id?: number;
          km_realizacao?: number | null;
          observacoes?: string | null;
          tipo?: string | null;
        };
        Update: {
          caminhao_id?: number | null;
          custo?: number | null;
          data_manutencao?: string | null;
          id?: number;
          km_realizacao?: number | null;
          observacoes?: string | null;
          tipo?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'manutencao_caminhao_id_fkey';
            columns: ['caminhao_id'];
            isOneToOne: false;
            referencedRelation: 'caminhao';
            referencedColumns: ['id'];
          },
        ];
      };
      medicao_pneu: {
        Row: {
          data_medicao: string | null;
          id: number;
          pneu_id: number | null;
          profundidade_atual_mm: number | null;
          viagem_id: number | null;
        };
        Insert: {
          data_medicao?: string | null;
          id?: number;
          pneu_id?: number | null;
          profundidade_atual_mm?: number | null;
          viagem_id?: number | null;
        };
        Update: {
          data_medicao?: string | null;
          id?: number;
          pneu_id?: number | null;
          profundidade_atual_mm?: number | null;
          viagem_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'medicao_pneu_pneu_id_fkey';
            columns: ['pneu_id'];
            isOneToOne: false;
            referencedRelation: 'pneu';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'medicao_pneu_viagem_id_fkey';
            columns: ['viagem_id'];
            isOneToOne: false;
            referencedRelation: 'viagem';
            referencedColumns: ['id'];
          },
        ];
      };
      motorista: {
        Row: {
          categoria_cnh: string | null;
          cpf: string | null;
          id: number;
          nome: string | null;
          numero_cnh: string | null;
        };
        Insert: {
          categoria_cnh?: string | null;
          cpf?: string | null;
          id?: number;
          nome?: string | null;
          numero_cnh?: string | null;
        };
        Update: {
          categoria_cnh?: string | null;
          cpf?: string | null;
          id?: number;
          nome?: string | null;
          numero_cnh?: string | null;
        };
        Relationships: [];
      };
      pneu: {
        Row: {
          caminhao_id: number | null;
          id: number;
          marca: string | null;
          posicao: string | null;
          status: string | null;
          sulco_inicial_mm: number | null;
        };
        Insert: {
          caminhao_id?: number | null;
          id?: number;
          marca?: string | null;
          posicao?: string | null;
          status?: string | null;
          sulco_inicial_mm?: number | null;
        };
        Update: {
          caminhao_id?: number | null;
          id?: number;
          marca?: string | null;
          posicao?: string | null;
          status?: string | null;
          sulco_inicial_mm?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'pneu_caminhao_id_fkey';
            columns: ['caminhao_id'];
            isOneToOne: false;
            referencedRelation: 'caminhao';
            referencedColumns: ['id'];
          },
        ];
      };
      viagem: {
        Row: {
          caminhao_id: number | null;
          data_fim: string | null;
          data_inicio: string | null;
          distancia_percorrida: number | null;
          id: number;
          km_final: number | null;
          km_inicial: number | null;
          motorista_id: number | null;
        };
        Insert: {
          caminhao_id?: number | null;
          data_fim?: string | null;
          data_inicio?: string | null;
          distancia_percorrida?: number | null;
          id?: number;
          km_final?: number | null;
          km_inicial?: number | null;
          motorista_id?: number | null;
        };
        Update: {
          caminhao_id?: number | null;
          data_fim?: string | null;
          data_inicio?: string | null;
          distancia_percorrida?: number | null;
          id?: number;
          km_final?: number | null;
          km_inicial?: number | null;
          motorista_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'viagem_caminhao_id_fkey';
            columns: ['caminhao_id'];
            isOneToOne: false;
            referencedRelation: 'caminhao';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'viagem_motorista_id_fkey';
            columns: ['motorista_id'];
            isOneToOne: false;
            referencedRelation: 'motorista';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      query_now: { Args: never; Returns: string };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  'public'
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    keyof DefaultSchema['Enums'] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
