export interface RegistryResponse {
  mensagem: string;
  user: {
    id: string | undefined;
    email: string | undefined;
  };
}
