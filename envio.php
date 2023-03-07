<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera os dados do formulário
  $name = $_POST["name"];
  $email = $_POST["email"];
  $sexo = $_POST["genero"];
  $estado_civil = $_POST["ecivil"];
  $nascimento = $_POST["datanasc"];
  $telefone= $_POST["Telefone"];
  $graduacao = $_POST["escolaridade"];
  $curso= $_POST["curso1"];
  $conclusao= $_POST["conclusão1"];
  $curso2= $_POST["curso2"];
  $conclusao2= $_POST["conclusão2"];
  $interesse = $_POST["area"];
  $uempresa = $_POST["nomeempresa"];
  $funcao = $_POST["funcao"];
  $periodo = $_POST["periodo"];
  $descriçãoatv = $_POST["Field4"];
  $pempresa = $_POST["nomeempresa2"];
  $funcao2 = $_POST["funcao2"];
  $periodo2 = $_POST["periodo2"];
  $descriçãoatvidade = $_POST["Field5"];
  $anexo = $_POST["anexar"];

  // Configura os dados do email
  $to = "rh@avsystemgeo.com.br";
  $subject = "Nova mensagem do site";
  $body = "Nome: $name\nEmail: $email\nMensagem: Olá, gostaria de deixar meu currículo no banco de talentos da AVSystemGEO\n
  Nome: $name, sexo: $sexo, Estado Civil: $estado_civil\n
  Data de Nascimento: ";

  // Envia o email
  if (mail($to, $subject, $body)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o email.";
  }
}
?>
