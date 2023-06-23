from django.test import TestCase
from rest_framework.test import APIClient
from .models import AlemenoUser
from rest_framework import status


class AuthenticationTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.register_url = '/api/v1/auth/signup/'
        self.login_url = '/api/v1/auth/login/'
        self.username = 'ritvikshukla'
        self.password = 'Hellouser56678!@#$#'
        self.email = 'rakeshshukla@example.com'
        self.first_name = "Rakesh"
        self.last_name = "Shukla"

    def test_registration(self):
        data = {
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name
        }
        response = self.client.post(self.register_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(AlemenoUser.objects.count(), 1)
        self.assertEqual(AlemenoUser.objects.get().username, self.username)

    def test_login(self):
        AlemenoUser.objects.create_user(username=self.username, password=self.password, email=self.email)
        data = {
            'email': self.email,
            'password': self.password
        }
        response = self.client.post(self.login_url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_json = response.json()
        self.assertEqual(response_json['data']['user']['email'], self.email)
        self.assertTrue('access' in response.json()['data']['auth_token'])
        self.assertTrue('refresh' in response.json()['data']['auth_token'])
