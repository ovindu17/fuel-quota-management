# Build stage
FROM openjdk:17-jdk-slim AS build

WORKDIR /app
COPY . .

# Make gradlew executable (if not already)
RUN chmod +x gradlew

# Run Gradle build using wrapper
RUN ./gradlew build --no-daemon

# Final stage with a smaller base image
FROM openjdk:17-jdk-slim

WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
