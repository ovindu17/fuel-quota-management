# Fuel Quota Management System

A comprehensive solution for managing fuel quotas with a React frontend, Spring Boot backend, and Flutter mobile application.

## Project Overview

This system helps manage and track fuel quotas for vehicles, allowing users to:
- Register vehicles and users
- Allocate and track fuel quotas
- Monitor fuel consumption
- Generate reports and analytics

## Repository Structure

This repository contains three main components:

- `/frontend` - React web application
- `/backend` - Spring Boot REST API
- `/mobile` - Flutter mobile application

## Technologies Used

### Frontend (Web)
- React.js
- Redux for state management
- Material-UI for components
- Axios for API communication

### Backend
- Spring Boot
- Spring Security for authentication
- Spring Data JPA for database operations
- MySQL/PostgreSQL database
- RESTful API architecture

### Mobile
- Flutter
- Dart
- Provider for state management
- Dio for API communication

## Getting Started

### Prerequisites
- Node.js and npm for the frontend
- JDK 11+ and Maven/Gradle for the backend
- Flutter SDK for the mobile app
- MySQL/PostgreSQL database

### Setup and Installation

#### Backend
```bash
cd backend
./mvnw spring-boot:run
# or if using Gradle
./gradlew bootRun
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

#### Mobile
```bash
cd mobile
flutter pub get
flutter run
```

## API Documentation

The backend provides a RESTful API with the following main endpoints:

- `/api/auth` - Authentication endpoints
- `/api/users` - User management
- `/api/vehicles` - Vehicle registration and management
- `/api/quotas` - Fuel quota allocation and tracking

Detailed API documentation is available through Swagger UI at `/swagger-ui.html` when the backend is running.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/fuel-quota-management](https://github.com/yourusername/fuel-quota-management) 