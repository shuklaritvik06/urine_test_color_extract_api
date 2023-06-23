# Urine Test Color Extraction API

This project aims to develop a system for extracting the color information from urine test strips. Urine tests are commonly used in medical diagnostics to detect various health conditions and monitor the overall well-being of individuals. The color of the urine test strips provides valuable information about the presence and concentration of certain substances in the urine, such as glucose, protein, ketones, and pH levels.

The goal of this project is to automate the process of extract all the colors from the urine test strips and return it as a json result. By leveraging computer vision techniques, we aim to create a system that can capture an image of a urine test strip and extract the relevant color information from it. This extracted color data can then be analyzed to determine the levels of different substances in the urine.

![Screenshot from 2023-06-24 04-12-34](https://github.com/shuklaritvik06/alemeno-assignment/assets/72812470/df912246-3199-425b-b663-5e4653a7e536)


### Some Endpoints



**Authentication** (No Permission Classes)

*Register*

- /api/v1/auth/signup/

*Response*

```json
{
  "status": "success",
  "code": 201,
  "message": "User registered successfully",
  "data": {
    "username": "rakesh",
    "email": "rakesh@rakesh.com",
    "registration_date": "2023-06-18",
    "registration_time": "16:08:43.678004",
    "first_name": "Rakesh",
    "last_name": "Nagar",
    "role": "REGULAR"
  }
}
```

*Login*

- /api/v1/auth/login/

*Response*

```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "email": "rakesh@rakesh.com",
      "first_name": "Rakesh",
      "last_name": "Nagar",
      "role": "REGULAR",
      "registration_date": "2023-06-18",
      "registration_time": "16:08:43.678004"
    },
    "auth_token": {
      "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTA4MTUyLCJpYXQiOjE2ODcxMDQ1NTIsImp0aSI6IjBkYzE1YmQwZDgzMzQzNmM4MmE1OWY1ZWU3MjRlMDUwIiwidXNlcl9pZCI6MTIsImVtYWlsIjoicmFrZXNoQHJha2VzaC5jb20iLCJyb2xlIjoiUkVHVUxBUiIsImlzcyI6IkRpdmVIUSJ9.hb8SdWEsFaAcUCsr7qkYRrFUummRtIF-JgcletlddX4",
      "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NzE5MDk1MiwiaWF0IjoxNjg3MTA0NTUyLCJqdGkiOiI5MDY3ZDg3NDI2NGM0Yzc4ODJmNWJjYTU4N2Y0N2ZiYyIsInVzZXJfaWQiOjEyLCJlbWFpbCI6InJha2VzaEByYWtlc2guY29tIiwicm9sZSI6IlJFR1VMQVIiLCJpc3MiOiJEaXZlSFEifQ.Yvo0bkY2yddmlg-ZJyGa2AxrFWs6hbAY2ErVmKoWo_w"
    }
  }
}
```

> Setup Locally to use Swagger UI and interact with the api easily

### How to set up locally?

- Clone the repo

```
git clone https://github.com/shuklaritvik06/alemeno-assignment.git
```

- Change the working directory

```
cd alemeno-assignment
```

- Set up .env file

```
Make a new file with the help of .env.example file

Define all the variable values
```

- Install the dependencies

```
pip install -r requirements.txt
```

- Migrate the models to the db

```
python3 manage.py makemigrations --settings "api.settings.local"
python3 manage.py migrate --settings "api.settings.local"
```

- Run the server

There are 2 different settings for production and development, we will use the dev one

```
python3 manage.py runserver --settings "api.settings.local"
```

Hurray! Your API Server has been successfully started!

Now go to http://localhost:8000/docs/swagger and Authenticate yourself using the Google OAuth or username & password

**Setup Google Auth**

- Create a Super User

```
python3 manage.py createsuperuser --settings "api.settings.local"
```

- Login to the Admin Portal


You would see Social Applications on the left side CLICK on that and then ADD SOCIAL APPLICATION

- Now Select the Google as provider and fill the client id and secret from the Google console

Google OAuth Setup Completed Successfully!


**Testing**

Run Tests

```markdown
python3 manage.py test --settings "api.settings.local"
```

**Docker Image**

- Pull the image from docker hub

```commandline
docker run -p 8000:8000 -d ritvikshukla/colorextract
```
