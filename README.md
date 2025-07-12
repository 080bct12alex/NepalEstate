# 🏠  Real Estate Price Prediction Of Kathmandu Valley

A modern web application that predicts real estate prices in Nepal's Kathmandu Valley using machine learning. Built with a **Next.js frontend** and a **Flask backend**, this app provides real-time price estimates based on property details.
---

# 👉 🌐 [Live Website](https://alexshrestha.vercel.app)

---

## 🔍 Features

- **Price Prediction:** Predict property prices based on:
  - Number of floors
  - Area (Anas)
  - Road width (ft)
  - City (Kathmandu, Bhaktapur, or Lalitpur)
  - Road type (Blacktopped, Gravelled, or Soil Stabilized)
- **Responsive Design:** Built with Next.js and Tailwind CSS for modern, mobile-friendly UI
- **Interactive Form:** Simple and intuitive user inputs
- **Real-time Predictions:** Instantly receive price estimates using a trained `MLPRegressor` machine learning model   after evaluating different models

---

---

## 🛠️ Technology Stack

- **Frontend:** Next.js , Tailwind CSS, React
- **Backend:** Flask,  scikit-learn
- **Machine Learning:** MLPRegressor (`scikit-learn`)

> 🔗 **GitHub Repositories**   
> - Backend: [NepalEStates API](https://github.com/080bct12alex/nepalestatesapi)

---


## 📦 Running on Local Device

To run the project locally on your device:


---

## ⚙️ Installation and Setup

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Python 3.13](https://www.python.org/) or compatible
- Git

### 🔧 Backend Setup

```bash
# Clone the repository
https://github.com/080bct12alex/NepalEStates.git


# Navigate to Flask server
cd api

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py
The Flask backend runs at: http://127.0.0.1:5001

💻 Frontend Setup


# Install dependencies
npm install

# Start development server
npx next dev

The Next.js frontend runs at: http://localhost:3000


🚀 Usage
Make sure both frontend and backend servers are running.

Open your browser and go to http://localhost:3000.

Fill in the property details:

Number of floors

Area in Anas

Road width in ft

Select a city

Select road type

Click the "Predict Price" button.

View the estimated property price on the screen.

