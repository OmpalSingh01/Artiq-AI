# ![Artiq AI Logo](https://res.cloudinary.com/dusmnbymp/image/upload/v1758252980/logoA_xwg1mw.png)

<h1 align="center">Artiq AI - Text to Image AI SaaS App</h1> <p align="center"> Generate stunning AI images with credits, payments, and cloud storage. Built with the <b>MERN Stack</b> + <b>Razorpay</b> + <b>Clipdrop API</b>. </p> <p align="center"> <a href="https://github.com/OmpalSingh01/Artiq-AI/tree/master/client"><img src="https://img.shields.io/github/stars/OmpalSingh01/Artiq-AI?style=for-the-badge" alt="Stars"></a> <a href="https://github.com/OmpalSingh01/Artiq-AI/tree/master/server"><img src="https://img.shields.io/github/forks/OmpalSingh01/Artiq-AI?style=for-the-badge" alt="Forks"></a> <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"></a> </p> <p align="center"> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white" /> <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" /> </p>




## 🚀 Live Demo
<p align="center">
  <a href="https://artiq-three.vercel.app/">
    <img src="https://img.shields.io/badge/🔗%20Live%20Demo-Artiq%20AI-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</p>



## 📖 About the Project
**Artiq AI** is a full-stack **AI SaaS application** built with the **MERN stack** that allows users to generate high-quality images from text prompts using the **Clipdrop API**.  

The app includes a **credit-based system** where users can generate images, and purchase additional credits securely via **Razorpay**.  
All generated images are stored securely in **Cloudinary**, and users can view their previous generate image in the **gallery**.  



## ✨ Features
- 🔐 **Authentication & Authorization** – Secure login/signup with JWT and MongoDB.  
- 🎨 **AI Text-to-Image Generator** – Powered by Clipdrop API.  
- 💳 **Credit System + Payments** – Buy credits via Razorpay.  
- 🖼️ **Gallery Feature** – View all your previously generated images.  
- ☁️ **Cloudinary Integration** – Secure and fast image storage.  
- 📱 **Responsive Design** – Works seamlessly on all devices.  
- 📬 **Contact Form + Newsletter** – Fully working forms.  
- ⚡ **MERN Stack** – Modern, scalable full-stack architecture.  



## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Image API:** Clipdrop API  
- **Payments:** Razorpay  
- **Storage:** Cloudinary  
- **Deployment:** Vercel (client) + Render (server)  



## 📸 Screenshots

<p align="center">
  <b>🏠 Homepage</b><br>
  <img src="https://github.com/user-attachments/assets/d828a57f-ff3a-4727-bcf5-04f9cd282829" alt="Homepage" width="520" height="310" />
</p>

<p align="center">
  <b>📊 Dashboard</b><br>
  <img src="https://github.com/user-attachments/assets/c3a53d66-b5db-4a5f-a215-ccc443d32c95" alt="Dashboard" width="520" height="310" />
</p>

<p align="center">
  <b>👨‍💻 Our Team</b><br>
  <img src="https://github.com/user-attachments/assets/6707836a-b85a-4984-9dc8-f9cf61e8261e" alt="Our Team" width="520" height="310" />
</p>

<p align="center">
  <b>🖼️ Gallery</b><br>
  <img src="https://github.com/user-attachments/assets/2a6f4634-9414-4d6f-9d4b-ddf3d57df30a" alt="Gallery" width="520" height="310" />
</p>

<p align="center">
  <b>💳 Payment</b><br>
  <img src="https://github.com/user-attachments/assets/b3b645b0-560a-4129-92f7-b3868d87cf7e" alt="Payment" width="520" height="310" />
</p>





## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ArtiqAI.git
cd ArtiqAI

2. Install Dependencies
Backend
cd server
npm install

Frontend
cd client
npm install

3. Setup Environment Variables

Create a .env file in the server directory with the following:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


4. Run the Project
Start Backend
cd server
npm run dev

Start Frontend
cd client
npm start
```
---

## 🌍 Deployment
- **Frontend:** Deployed on [Vercel](https://example.vercel.app)  
- **Backend:** Deployed on [Render](https://example.onrender.com)  
- **Database:** MongoDB Atlas  


## 👥 Our Team
### 💡 About the Team

The Artiq AI – Text to Image AI SaaS App was built with a focus on innovation and seamless user experience.
Two O-Level candidates, Anamika Singh and Jatan Singh, collaborated with us as part of their O-Level project submission, contributing to both frontend design and backend integration. Their creativity and teamwork added great value and helped them successfully complete their O-Level practical assessment.

### 🧩 Anamika Singh
Role: Frontend Developer • Manual Tester

Category: O-Level Project Submission

✨ Contributions:

Enhanced the UI: replaced placeholder text with meaningful content & selected banner/about page images 🖼️.

Assisted in Razorpay integration 💳.

Introduced the President Gallery 🎨.

Conducted manual testing ✅.

🌟 Impact:
Her creativity and attention to detail elevated the project’s overall look and feel.

[![Gmail](https://img.shields.io/badge/Gmail-Email-red?style=for-the-badge&logo=gmail)](mailto:anamikasingh8106@gmail.com)

<hr style="width: 10%; text-align: left; margin-left: 0;">
                

### ⚙️ Jatan Singh
Role: Frontend Developer • Backend Integrator

Category: O-Level Project Submission

✨ Contributions:

Implemented MongoDB Atlas 🗄️ & Razorpay integration 💳.

Supported frontend enhancements & manual testing ✅.

Ensured smooth frontend-backend connectivity 🔗.

🌟 Impact:
His technical expertise and teamwork strengthened the system’s stability and functionality.

[![Gmail](https://img.shields.io/badge/Gmail-Email-red?style=for-the-badge&logo=gmail)](mailto:druvhjatan8840@gmail.com)






## 🤝 Contributing
We ❤️ contributions! Whether it’s bug fixes, feature requests, or improvements, feel free to contribute.  

### Steps to Contribute:
1. 🍴 **Fork** the repository  
2. 🌱 **Create** your Feature Branch  
   ```bash
   git checkout -b feature/AmazingFeature
   
   
💻 Commit your Changes
git commit -m "Add some AmazingFeature"


🚀 Push to the Branch
git push origin feature/AmazingFeature


🔁 Open a Pull Request


---

## 📜 License

This project is licensed under the MIT License.
See the full license in the LICENSE
 file.


📧 Contact

👨‍💻 Mohit Singh

📩 Email: mohitsingh.2626452@gmail.com





