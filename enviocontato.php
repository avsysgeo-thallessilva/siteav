<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera os dados do formulário
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Configura os dados do email
  $to = "seu_email@exemplo.com";
  $subject = "Nova mensagem do site";
  $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";

  // Envia o email
  if (mail($to, $subject, $body)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o email.";
  }
}
?>
