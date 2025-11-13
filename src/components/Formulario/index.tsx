import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import {
  FormWrapper,
  Form,
  Label,
  Input,
  ErrorText,
  Button,
  SpanMessage,
  Error,
  Title,
  Subtitle,
} from "./styles";

interface FormData {
  password: string;
  email: string;
}

interface FormularioProps {
  onSubmit: (data: FormData) => void;
  error: string;
  loading: boolean;
  mensagem: string;
}

export default function Formulario({
  onSubmit,
  error,
  mensagem,
}: FormularioProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha precisa ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Coffee Delivery</Title>
        <Subtitle>{mensagem}</Subtitle>

        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Button type="submit"> Acessar </Button>

        <SpanMessage>
          <a href="#">Esqueceu sua senha?</a>
        </SpanMessage>

        {error && <Error>{error}</Error>}
      </Form>
    </FormWrapper>
  );
}
