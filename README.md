# BrainFlix

BrainFlix -  a functioning and responsive app prototype for a new video streaming platform.

## Features

- Multi-page navigation for Home, Video Details, and Video Upload.
- Video listing displaying details and thumbnails.
- Dynamic video content retrieval from custom API using Axios.
- Responsiveness and adherence to design guidelines.


## Tech Stack

**Client:** React, React Router DOM, Axios, Sass

**Server:** Node, Express


## API Reference

#### Get all videos

```http
  GET ${server_url}/videos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `server_url` | `string` | **Required**. server URL |
| `input` | `string` | **Required**. videos |

#### Get video by id

```http
  GET ${server_url}/videos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `server_url` | `string` | **Required**. server URL |
| `id`      | `string` | **Required**. Id of item to fetch |

```http
  POST ${server_url}/videos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `server_url` | `string` | **Required**. server URL |
| `image` | `file` | **Required**. Video file/photo to be uploaded |
| `title` | `string` | **Required**. Title of the video |
| `description` | `string` | **Required**. Description of video |
| `channel` | `string` | **Required**. Creator/Uploader name |



## Run Locally

Clone the project

```bash
  git clone https://github.com/rellagant/barbara-csankova-brainflix
```

Go to the project directory

```bash
  cd barbara-csankova-brainflix
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

### dependencies

- axios: ^1.7.2
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.23.1
- react-scripts: 5.0.1
- sass: ^1.77.2
- react-toastify: ^10.0.5