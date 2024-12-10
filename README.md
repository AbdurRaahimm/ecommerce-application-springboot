# Start Generation Here
# Installation Instructions for the Application


## Steps to Install the Application

1. **Clone the Repository**
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/AbdurRaahimm/ecommerce-application-springboot.git
   ```

2. **Navigate to the Project Directory**
   Change your directory to the project folder:
   ```bash
   cd ecommerce-application-springboot
   ```

3. **Install Dependencies**
   Run the following command to install the required dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. **Set Up Environment Variables**
   Create a `.env.local` file in the frontend root of the project and add the following line:
   ```
   VITE_BASE_API_URL=http://localhost:8080/api
   ```

5. **Start the Application**
   Finally, start the application with:
   ```bash
   npm run dev
   ```

Your application should now be running on `http://localhost:5173`.

## Troubleshooting
If you encounter any issues, please check the following:
- Ensure all dependencies are installed correctly.
- Verify that your environment variables are set up properly.

For further assistance, refer to the project's documentation or open an issue on the repository.
# End Generation Here
