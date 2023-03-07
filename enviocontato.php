<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera os dados do formulário
  $name = $_POST["Nome"];
  $email = $_POST["email"];
  $assunto = $_POST["Assunto"];
  $message = $_POST["Mensagem"];
  $telefone = $_POST["telefone"];

  // Configura os dados do email
  $to = "seu_email@exemplo.com";
  $subject = $assunto;
  $body = "Nome: $name\nEmail: $email\nTelefone: $telefone\n Mensagem:\n$message";

  // Envia o email
  if (mail($to, $subject, $body)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o email.";
  }
}
?>
