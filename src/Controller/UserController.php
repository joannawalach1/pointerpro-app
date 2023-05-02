<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;

/**
 * @Route("/api", name="api_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/user", name="app_user", methods={"GET"})
     */

    public function index(ManagerRegistry $doctrine): Response
    {
        $users = $doctrine
            ->getRepository(User::class)
            ->findAll();
        $data = [];
        foreach ($users as $user) {
            $data[] = [
                'id' => $user->getId(),
                'login' => $user->getLogin(),
                'email' => $user->getEmail(),
                'password' => $user->getPassword()
            ];
        }
        return $this->json($data);
    }
/**
     * @Route("/user", name="add_User", methods={"POST"})
     */

    public function addUser(ManagerRegistry $doctrine, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        $user = new User();
        $user->setLogin($request->request->get('login'));
        $user->setEmail($request->request->get('email'));
        $user->setPassword($request->request->get('password'));
        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json("new user has been added" . $user->getId());
    }
    /**
     * @Route("/user/{id}", name="show_user", methods={"GET"})
     */

     public function showUser(ManagerRegistry $doctrine, int $id): Response
     {
         $user = $doctrine->getRepository(User::class)->find($id);
         if (!$user) {
            return $this->json("No user found" . $id, 404);
         }
         $data= [
            'id' => $user->getId(),
            'login' => $user->getLogin(),
            'email' => $user->getEmail(),
            'password' => $user->getPassword()
         ];
         return $this->json($data);
     }

       /**
     * @Route("/user/{id}", name="edit_user", methods={"PUT", "PATCH"})
     */
    
     public function editUser(ManagerRegistry $doctrine, Request $request, int $id): Response
     {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($id);
        if (!$user) {
            return $this->json("No user with that id" . $id, 404);
        }
        $content = json_decode($request->getContent());
        $user->addUsersetLogin($content->login);
        $user->setEmail($content->email);
        $user->setPassword($content->password);
        $entityManager->flush();
        $data = [
            'id' => $user->getId(),
            'login' => $user->getLogin(),
            'email' => $user->getEmail(),
            'password' => $user->getPassword()
        ];
        return $this->json($data);
     }

       /**
     * @Route("/user/{id}", name="delete_user", methods={"DELETE"})
     */

     public function deleteUser(ManagerRegistry $doctrine, int $id): Response
     {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find();
        if (!$user) {
            return $this->json("No user with id" . $id, 404);
        }
        $entityManager->remove($user);
        $entityManager->flush();
        return $this->json("Deleted user with id" . $id);
     }
}
