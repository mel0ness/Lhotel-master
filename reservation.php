<?php

if(isset($_POST['dontlie']) && $_POST['dontlie'] != ''){
  header('location:confirm-reservation.html');
} 
else 
if ($_SERVER['REQUEST_METHOD']=='POST') {
     
      // (1) Code PHP pour traiter l'envoi de l'email
     
      // Récupération des variables et sécurisation des données
      $nom = htmlentities($_POST['name_user']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
      $prenom = htmlentities($_POST['name_user2']);
      $mail = htmlentities($_POST['mail_user']);
        $adult = htmlentities($_POST['reser_persa']);
        $children = htmlentities($_POST['reser_perse']);
      $message = htmlentities($_POST['commentary']);
        $gender = htmlentities($_POST['gender']);
        $tel = htmlentities($_POST['tel_user']);
        $dates = htmlentities($_POST['reser_dates']);
$newDates = date("d-m-Y", strtotime($dates));
        $datee = htmlentities($_POST['reser_datee']);
        $newDatee = date("d-m-Y", strtotime($datee));
        $nights = htmlentities($_POST['nights']);
        $price = htmlentities($_POST['price']);
        $paws = htmlentities($_POST['paws']);
        $nimals = htmlentities($_POST['nimals']);
         $chambre = htmlentities($_POST['chambre']);
         $dontlie = htmlentities($_POST['dontlie']);
     
      // Variables concernant l'email
     
      $destinataire = 'lhotel.thouars@gmail.com'; // Adresse email du webmaster (à personnaliser)
        $demand = 'Reservation';
      $contenu = '<html><head><title> Reservation </title></head><body>';
      $contenu .= '<p>Vous avez une reservation</p>';
      $contenu .= '<p><strong>Nom</strong>: '.$gender.' '.$nom.' '.$prenom.'</p>';
      $contenu .= '<p><strong>Email</strong>: '.$mail.'</p>';
        $contenu .= '<p><strong>telephone</strong>: '.$tel.'</p>';
        $contenu .= '<p><strong>Arrive le</strong>: '.$newDatee.'  dans la chambre : '.$chambre.'</p>';
        $contenu .= '<p><strong>Et repart le</strong>: '.$newDates.' pour '.$nights.' nuits</p>';
        $contenu .= '<p><strong>Total estimé sans petits-déjeuners</strong>: '.$price.'</p>';
        $contenu .= '<p><strong>pour</strong>: '.$adult.' adultes et '.$children.' enfants</p>';
        $contenu .= '<p><strong>avec des animaux?</strong>'.$paws.',  '.$nimals.'</p>';
      $contenu .= '<p><strong>Message ou questions supplémentaires</strong>: '.$message.'</p>';
      $contenu .= '<p><strong>Test spam</strong>: '.$dontlie.'</p>';
      $contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)
     
      // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
      $headers = 'MIME-Version: 1.0'."\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
     
      // Envoyer l'email
      mail($destinataire, $demand, $contenu, $headers); // Fonction principale qui envoi l'email
      header("location:confirm-reservation.html"); // Afficher un message pour indiquer que le message a été envoyé
      // (2) Fin du code pour traiter l'envoi de l'email
    }
    ?>