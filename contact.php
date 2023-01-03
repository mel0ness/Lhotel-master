<?php
if((isset($_POST['dontlie']) && $_POST['dontlie'] != '') || $_POST['demand'] === ''){
  header('location:confirm-contact.html');
} 
else 
if ($_SERVER['REQUEST_METHOD']=='POST') {
     
      // (1) Code PHP pour traiter l'envoi de l'email
     
      // Récupération des variables et sécurisation des données
      $nom = htmlentities($_POST['name']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
      $prenom = htmlentities($_POST['first_name']);
      $mail = htmlentities($_POST['mail']);
        $demand = htmlentities($_POST['demand']);
      $message = htmlentities($_POST['descr_demand']);
      $spam = htmlentities($_POST['dontlie']);
     
      // Variables concernant l'email
     
      $destinataire = 'lhotel.thouars@gmail.com'; // Adresse email du webmaster (à personnaliser)
      $contenu = '<html><head><title> '.$demand.' </title></head><body>';
      $contenu .= '<p>Contact urgent</p>';
      $contenu .= '<p><strong>Nom</strong>: '.$nom.' '.$prenom.'</p>';
      $contenu .= '<p><strong>Email</strong>: '.$mail.'</p>';
        $contenu .= '<p><strong>Raison du contact</strong>: '.$demand.'</p>';
      $contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
      $contenu .= '<p><strong>spam test</strong>: '.$spam.'</p>';
      $contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)
     
      // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
      $headers = 'MIME-Version: 1.0'."\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
     
      // Envoyer l'email
      mail($destinataire, $demand, $contenu, $headers); // Fonction principale qui envoi l'email
      header("location:confirm-contact.html"); // Afficher un message pour indiquer que le message a été envoyé
      // (2) Fin du code pour traiter l'envoi de l'email
    }
    ?>