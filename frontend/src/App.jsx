import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://kalsubai-backend.onrender.com/api/bookings";

function App() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchBookings = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axios.get(API_URL);

            setBookings(response.data);
        } catch (err) {
            console.error(err);
            setError(
                "Unable to connect to the Kalsubai backend."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const totalPeople = bookings.reduce(
        (total, booking) =>
            total + Number(booking.people || 0),
        0
    );

    return (
        <div className="app">

            {/* ================= NAVBAR ================= */}

            <header className="navbar">

                <div className="logo">
                    <div className="logo-mark">
                        🏔️
                    </div>

                    <div>
                        <h2>Kalsubai</h2>
                        <span>TOURISM</span>
                    </div>
                </div>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#packages">Packages</a>
                    <a href="#bookings">Bookings</a>
                </nav>

                <a
                    href="#bookings"
                    className="nav-button"
                >
                    Book Now
                </a>

            </header>


            {/* ================= HERO ================= */}

            <section id="home" className="hero">

                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <div className="hero-badge">
                        ★ MAHARASHTRA'S HIGHEST PEAK
                    </div>

                    <h1>
                        Adventure
                        <br />
                        <span>Above the Clouds</span>
                    </h1>

                    <p>
                        Discover the breathtaking beauty of
                        Kalsubai — where every step takes you
                        closer to the sky.
                    </p>

                    <div className="hero-actions">

                        <a
                            href="#packages"
                            className="primary-button"
                        >
                            Explore Packages
                            <span>→</span>
                        </a>

                        <a
                            href="#about"
                            className="secondary-button"
                        >
                            Discover Kalsubai
                        </a>

                    </div>

                </div>


                <div className="hero-scroll">
                    <span></span>
                    Scroll to explore
                </div>


                <div className="hero-location">
                    📍 Bari Village, Maharashtra
                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section id="about" className="intro">

                <div className="section-label">
                    THE KALSUBAI EXPERIENCE
                </div>

                <h2>
                    Where Nature Meets
                    <br />
                    <span>Adventure</span>
                </h2>

                <p className="intro-text">
                    Kalsubai Peak offers an unforgettable
                    trekking experience through the beautiful
                    Sahyadri mountains. From sunrise views to
                    peaceful village landscapes, every moment
                    becomes a memory.
                </p>


                <div className="features">

                    <div className="feature">
                        <div className="feature-icon">
                            🏔️
                        </div>

                        <h3>
                            1,646 M
                        </h3>

                        <p>
                            Peak Elevation
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-icon">
                            🥾
                        </div>

                        <h3>
                            Scenic Trek
                        </h3>

                        <p>
                            Guided Adventure
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-icon">
                            🌅
                        </div>

                        <h3>
                            Sunrise
                        </h3>

                        <p>
                            Mountain Views
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-icon">
                            🏕️
                        </div>

                        <h3>
                            Village Stay
                        </h3>

                        <p>
                            Local Experience
                        </p>
                    </div>

                </div>

            </section>


            {/* ================= PACKAGES ================= */}

            <section
                id="packages"
                className="packages-section"
            >

                <div className="section-heading">

                    <div>
                        <div className="section-label">
                            PLAN YOUR ADVENTURE
                        </div>

                        <h2>
                            Trek Packages
                        </h2>
                    </div>

                    <p>
                        Choose an experience that
                        matches your adventure.
                    </p>

                </div>


                <div className="packages-grid">


                    {/* BASIC */}

                    <div className="package-card">

                        <div className="package-top">

                            <span className="package-number">
                                01
                            </span>

                            <span className="package-icon">
                                🥾
                            </span>

                        </div>

                        <h3>
                            Basic Trek
                        </h3>

                        <p>
                            A guided trekking experience
                            for adventure lovers.
                        </p>

                        <div className="package-price">
                            ₹499
                            <small>/ person</small>
                        </div>

                        <ul>
                            <li>✓ Guided Trek</li>
                            <li>✓ Trek Support</li>
                            <li>✓ Basic Refreshments</li>
                        </ul>

                        <a
                            href="#bookings"
                            className="package-button"
                        >
                            Choose Package →
                        </a>

                    </div>


                    {/* BREAKFAST */}

                    <div className="package-card featured-card">

                        <div className="popular">
                            MOST POPULAR
                        </div>

                        <div className="package-top">

                            <span className="package-number">
                                02
                            </span>

                            <span className="package-icon">
                                🌄
                            </span>

                        </div>

                        <h3>
                            Trek + Breakfast
                        </h3>

                        <p>
                            Trek through the Sahyadris
                            with a delicious breakfast.
                        </p>

                        <div className="package-price">
                            ₹799
                            <small>/ person</small>
                        </div>

                        <ul>
                            <li>✓ Guided Trek</li>
                            <li>✓ Breakfast Included</li>
                            <li>✓ Trek Support</li>
                        </ul>

                        <a
                            href="#bookings"
                            className="package-button"
                        >
                            Choose Package →
                        </a>

                    </div>


                    {/* STAY */}

                    <div className="package-card">

                        <div className="package-top">

                            <span className="package-number">
                                03
                            </span>

                            <span className="package-icon">
                                🏕️
                            </span>

                        </div>

                        <h3>
                            One Night Stay
                        </h3>

                        <p>
                            Experience the complete
                            Kalsubai village adventure.
                        </p>

                        <div className="package-price">
                            ₹1499
                            <small>/ person</small>
                        </div>

                        <ul>
                            <li>✓ Guided Trek</li>
                            <li>✓ Village Stay</li>
                            <li>✓ Dinner & Breakfast</li>
                        </ul>

                        <a
                            href="#bookings"
                            className="package-button"
                        >
                            Choose Package →
                        </a>

                    </div>

                </div>

            </section>


            {/* ================= STATS ================= */}

            <section className="stats-section">

                <div className="stat">
                    <strong>
                        {bookings.length}
                    </strong>

                    <span>
                        Active Bookings
                    </span>
                </div>

                <div className="stat">
                    <strong>
                        {totalPeople}
                    </strong>

                    <span>
                        Registered Trekkers
                    </span>
                </div>

                <div className="stat">
                    <strong>
                        1,646m
                    </strong>

                    <span>
                        Peak Elevation
                    </span>
                </div>

                <div className="stat">
                    <strong>
                        100%
                    </strong>

                    <span>
                        Adventure
                    </span>
                </div>

            </section>


            {/* ================= BOOKINGS ================= */}

            <section
                id="bookings"
                className="bookings-section"
            >

                <div className="booking-heading">

                    <div>

                        <div className="section-label">
                            LIVE SYSTEM DATA
                        </div>

                        <h2>
                            Trek Bookings
                        </h2>

                        <p>
                            Booking records retrieved
                            directly from the Express.js
                            backend.
                        </p>

                    </div>


                    <button
                        className="refresh-button"
                        onClick={fetchBookings}
                    >
                        ↻ Refresh
                    </button>

                </div>


                {loading && (

                    <div className="message-card">
                        <div className="spinner"></div>

                        <h3>
                            Loading bookings...
                        </h3>

                        <p>
                            Connecting to Kalsubai
                            Tourism server.
                        </p>
                    </div>

                )}


                {error && !loading && (

                    <div className="message-card error-card">

                        <div className="error-icon">
                            !
                        </div>

                        <h3>
                            Backend Connection Error
                        </h3>

                        <p>
                            Make sure the Express.js
                            backend is running on
                            port 5003.
                        </p>

                    </div>

                )}


                {!loading &&
                    !error &&
                    bookings.length > 0 && (

                        <div className="booking-grid">

                            {bookings.map(
                                (booking) => (

                                    <div
                                        className="booking-card"
                                        key={booking.id}
                                    >

                                        <div className="booking-card-top">

                                            <div className="customer-avatar">
                                                {booking.name.charAt(0)}
                                            </div>

                                            <div>
                                                <h3>
                                                    {booking.name}
                                                </h3>

                                                <span>
                                                    Booking #{String(
                                                        booking.id
                                                    ).padStart(
                                                        3,
                                                        "0"
                                                    )}
                                                </span>
                                            </div>

                                        </div>


                                        <div className="booking-details">

                                            <div>
                                                <span>
                                                    DATE
                                                </span>

                                                <strong>
                                                    📅 {booking.date}
                                                </strong>
                                            </div>


                                            <div>
                                                <span>
                                                    TREKKERS
                                                </span>

                                                <strong>
                                                    👥 {booking.people}
                                                    People
                                                </strong>
                                            </div>


                                            <div>
                                                <span>
                                                    PACKAGE
                                                </span>

                                                <strong>
                                                    📦 {booking.package}
                                                </strong>
                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    )}

            </section>


            {/* ================= CTA ================= */}

            <section className="cta-section">

                <div className="cta-content">

                    <div className="section-label">
                        YOUR NEXT ADVENTURE AWAITS
                    </div>

                    <h2>
                        Ready to
                        <span> Climb Higher?</span>
                    </h2>

                    <p>
                        Pack your bags, gather your friends
                        and experience the magic of Kalsubai.
                    </p>

                    <a
                        href="#packages"
                        className="cta-button"
                    >
                        Start Your Journey →
                    </a>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer>

                <div className="footer-main">

                    <div className="footer-brand">

                        <div className="logo">
                            <div className="logo-mark">
                                🏔️
                            </div>

                            <div>
                                <h2>Kalsubai</h2>
                                <span>TOURISM</span>
                            </div>
                        </div>

                        <p>
                            Trek Booking & Management
                            System
                        </p>

                    </div>


                    <div className="footer-links">

                        <a href="#home">
                            Home
                        </a>

                        <a href="#about">
                            About
                        </a>

                        <a href="#packages">
                            Packages
                        </a>

                        <a href="#bookings">
                            Bookings
                        </a>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 Kalsubai Tourism
                    </span>

                    <span>
                        Built with React + Express.js
                    </span>

                </div>

            </footer>

        </div>
    );
}

export default App;