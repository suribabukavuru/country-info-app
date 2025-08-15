# 🌍 Country Info App

A responsive React application that allows users to search and explore comprehensive information about countries around the world. Discover flags, capitals, population, regions, languages, currencies, and much more with an intuitive and modern interface.

## 🚀 Features

- **🔍 Search Functionality**: Search countries by name with real-time filtering
- **🗺️ Interactive Interface**: Clean and responsive design using Bootstrap 5
- **🏳️ Country Details**: Display flags, capitals, population, area, languages, and currencies
- **🌎 Regional Filtering**: Filter countries by continent/region
- **⚡ Fast Performance**: Efficient API calls with optimized rendering
- **🎨 Modern UI/UX**: Beautiful cards layout with hover effects

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Bootstrap 5** - CSS framework for responsive design
- **REST Countries API** - Source for country data
- **Axios** - HTTP client for API requests
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Custom styling and animations

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/country-info-app.git
   cd country-info-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🌐 API Reference

This application uses the [REST Countries API](https://restcountries.com/) to fetch country information.

**Base URL**: `https://restcountries.com/v3.1/`

**Endpoints used**:
- `GET /all` - Fetch all countries
- `GET /name/{name}` - Search countries by name
- `GET /region/{region}` - Filter by region

## 📱 Usage

1. **Search Countries**: Use the search bar to find specific countries
2. **Browse All**: Scroll through all countries in the grid layout
3. **Filter by Region**: Use region filters to narrow down results
4. **View Details**: Click on country cards to see detailed information
5. **Responsive Design**: Use on any device - desktop, tablet, or mobile

## 🏗️ Project Structure

```
country-info-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CountryCard.js
│   │   ├── SearchBar.js
│   │   ├── FilterBar.js
│   │   └── Loading.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Key Components

### CountryCard Component
- Displays country flag, name, capital, population
- Responsive card design with hover effects
- Shows additional details like region and languages

### SearchBar Component
- Real-time search functionality
- Debounced input for better performance
- Clear search option

### FilterBar Component
- Filter by regions (Africa, Asia, Europe, etc.)
- Reset filter functionality
- Dropdown interface

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=https://restcountries.com/v3.1
REACT_APP_NAME=Country Info App
```

## 📊 Performance Features

- **Lazy Loading**: Images load as needed
- **Debounced Search**: Reduces API calls during typing
- **Memoization**: Optimized re-rendering with React.memo
- **Error Handling**: Graceful error states and loading indicators

## 🎨 Design Features

- **Clean Typography**: Easy-to-read fonts and hierarchy
- **Color Scheme**: Professional blue and gray palette
- **Animations**: Smooth hover and transition effects
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Suribabu Kavuru**
- GitHub: [@suribabukavuru](https://github.com/suribabukavuru)
- LinkedIn: [suribabukavuru](https://linkedin.com/in/suribabukavuru)
- Email: suribabukavuru1@gmail.com

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing free country data
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [React](https://reactjs.org/) community for excellent documentation
- All contributors and users who provide feedback
---
⭐ **Star this repository** if you found it helpful!

🔗 **Live Demo**: [Country Info App](https://your-deployed-app-url.com)

---

*Built with ❤️ by Suribabu Kavuru*
