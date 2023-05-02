<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactAppController extends AbstractController
{
    #[Route('/react/app', name: 'app_react_app')]
    public function index(): Response
    {
        return $this->render('react_app/index.html.twig', [
            'controller_name' => 'ReactAppController',
        ]);
    }
}
