# MongoDB Microservice App 

This is a simple Node.js microservice connected to a MongoDB database. It was created for SIT323 Cloud Native Application Development at Deakin University.

## What the App Does

When deployed, the app:
- Connects to MongoDB
- Performs a test insert into the database
- Returns a JSON response

Example output:
```json
{
  "_id": "random_generated_id",
  "message": "MongoDB connected and CRUD successful..."
}
```

---

## Technologies Used

- Node.js + Express
- MongoDB
- Docker
- Kubernetes
- Minikube
- YAML for Kubernetes configs

---

## 🚀 How to Run the App

1. **Start Minikube**
   ```
   minikube start --driver=docker
   ```

2. **Apply Kubernetes Configs**
   ```
   kubectl apply -f kubernetes/
   ```

3. **Check if Pods are Running**
   ```
   kubectl get pods
   ```

4. **Port Forward the App**
   ```
   kubectl port-forward svc/app-service 3000:3000
   ```

5. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## What’s Working

- MongoDB service is deployed and persistent using PVC.
- Node.js app connects securely using secrets.
- Successful CRUD test on startup.
- JSON message is returned via browser.

