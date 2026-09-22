const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   KALSUBAI BOOKING DATA
========================= */

const bookings = [
    {
        id: 1,
        name: "Rahul Patil",
        phone: "9876543210",
        date: "20 Sep 2026",
        people: 3,
        package: "Basic Trek",
        amount: 1497
    },
    {
        id: 2,
        name: "Sneha More",
        phone: "9988776655",
        date: "22 Sep 2026",
        people: 4,
        package: "Trek + Breakfast",
        amount: 3196
    },
    {
        id: 3,
        name: "Amit Sharma",
        phone: "9123456780",
        date: "25 Sep 2026",
        people: 2,
        package: "One Night Stay",
        amount: 2998
    },
    {
        id: 4,
        name: "Priya Joshi",
        phone: "9876501234",
        date: "30 Sep 2026",
        people: 3,
        package: "Trek + Breakfast",
        amount: 2397
    }
];


/* =========================
   CALCULATIONS
========================= */

const totalPeople = bookings.reduce(
    (total, booking) => total + booking.people,
    0
);

const totalRevenue = bookings.reduce(
    (total, booking) => total + booking.amount,
    0
);


/* =========================
   HOME / DASHBOARD
========================= */

app.get("/", (req, res) => {

    const bookingRows = bookings.map((booking) => {

        return `
            <tr>
                <td>
                    <div class="customer">
                        <div class="avatar">
                            ${booking.name.charAt(0)}
                        </div>

                        <div>
                            <strong>${booking.name}</strong>
                            <small>${booking.phone}</small>
                        </div>
                    </div>
                </td>

                <td>${booking.date}</td>

                <td>
                    <span class="people">
                        👥 ${booking.people}
                    </span>
                </td>

                <td>
                    <span class="package">
                        ${booking.package}
                    </span>
                </td>

                <td>
                    <strong>₹${booking.amount}</strong>
                </td>
            </tr>
        `;

    }).join("");


    res.send(`

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>
        Kalsubai Tourism | Backend Dashboard
    </title>


    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        body {

            font-family:
                "Segoe UI",
                Arial,
                sans-serif;

            background:
                #eef3ef;

            color:
                #17251d;
        }


        /* =========================
           NAVBAR
        ========================= */

        .navbar {

            height: 75px;

            display: flex;

            align-items: center;

            justify-content: space-between;

            padding:
                0 7%;

            background:
                #143c2b;

            color:
                white;

            box-shadow:
                0 4px 15px
                rgba(0,0,0,0.12);
        }


        .brand {

            display: flex;

            align-items: center;

            gap: 12px;
        }


        .brand-icon {

            font-size:
                32px;
        }


        .brand h2 {

            font-size:
                21px;

            letter-spacing:
                0.5px;
        }


        .brand p {

            font-size:
                11px;

            opacity:
                0.65;

            margin-top:
                2px;

            letter-spacing:
                1px;
        }


        .status {

            display: flex;

            align-items: center;

            gap: 8px;

            padding:
                8px 15px;

            border-radius:
                30px;

            background:
                rgba(255,255,255,0.1);

            font-size:
                13px;
        }


        .online {

            width:
                9px;

            height:
                9px;

            border-radius:
                50%;

            background:
                #4ade80;

            box-shadow:
                0 0 10px #4ade80;
        }


        /* =========================
           MAIN
        ========================= */

        .container {

            width:
                86%;

            max-width:
                1250px;

            margin:
                0 auto;

            padding:
                55px 0;
        }


        .welcome {

            margin-bottom:
                35px;
        }


        .welcome .label {

            color:
                #b4872e;

            font-size:
                13px;

            font-weight:
                700;

            letter-spacing:
                2px;

            margin-bottom:
                10px;
        }


        .welcome h1 {

            font-size:
                38px;

            margin-bottom:
                10px;
        }


        .welcome p {

            color:
                #66736b;

            font-size:
                16px;
        }


        /* =========================
           STAT CARDS
        ========================= */

        .stats {

            display:
                grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap:
                20px;

            margin-bottom:
                35px;
        }


        .stat-card {

            background:
                white;

            padding:
                25px;

            border-radius:
                18px;

            box-shadow:
                0 8px 25px
                rgba(26,49,36,0.07);

            border:
                1px solid #e2e9e3;
        }


        .stat-top {

            display:
                flex;

            justify-content:
                space-between;

            align-items:
                center;

            margin-bottom:
                18px;
        }


        .stat-icon {

            width:
                43px;

            height:
                43px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            border-radius:
                12px;

            background:
                #edf5ef;

            font-size:
                21px;
        }


        .stat-title {

            color:
                #758078;

            font-size:
                13px;

            font-weight:
                600;
        }


        .stat-value {

            font-size:
                30px;

            font-weight:
                750;
        }


        .stat-sub {

            margin-top:
                5px;

            font-size:
                12px;

            color:
                #7d8780;
        }


        /* =========================
           CONTENT GRID
        ========================= */

        .section-card {

            background:
                white;

            border-radius:
                18px;

            padding:
                28px;

            margin-bottom:
                30px;

            box-shadow:
                0 8px 25px
                rgba(26,49,36,0.07);

            border:
                1px solid #e2e9e3;
        }


        .section-header {

            display:
                flex;

            justify-content:
                space-between;

            align-items:
                center;

            margin-bottom:
                25px;
        }


        .section-header h2 {

            font-size:
                21px;
        }


        .section-header p {

            color:
                #7b847e;

            font-size:
                13px;

            margin-top:
                5px;
        }


        .count-badge {

            background:
                #e8f1eb;

            color:
                #23603e;

            padding:
                7px 13px;

            border-radius:
                20px;

            font-size:
                12px;

            font-weight:
                700;
        }


        /* =========================
           TABLE
        ========================= */

        .table-wrapper {

            overflow-x:
                auto;
        }


        table {

            width:
                100%;

            border-collapse:
                collapse;

            min-width:
                750px;
        }


        th {

            text-align:
                left;

            padding:
                13px 12px;

            background:
                #f6f8f6;

            color:
                #68746c;

            font-size:
                11px;

            text-transform:
                uppercase;

            letter-spacing:
                0.7px;
        }


        td {

            padding:
                17px 12px;

            border-bottom:
                1px solid #edf0ed;

            font-size:
                14px;
        }


        tr:last-child td {

            border-bottom:
                none;
        }


        .customer {

            display:
                flex;

            align-items:
                center;

            gap:
                12px;
        }


        .avatar {

            width:
                38px;

            height:
                38px;

            border-radius:
                50%;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            background:
                #dcebe1;

            color:
                #23583b;

            font-weight:
                700;
        }


        .customer strong {

            display:
                block;
        }


        .customer small {

            display:
                block;

            color:
                #879189;

            margin-top:
                3px;
        }


        .people {

            background:
                #f2f5f3;

            padding:
                6px 10px;

            border-radius:
                8px;

            font-size:
                12px;
        }


        .package {

            color:
                #5d6b62;

            font-size:
                13px;
        }


        /* =========================
           API CARD
        ========================= */

        .api-grid {

            display:
                grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap:
                18px;
        }


        .api-box {

            padding:
                20px;

            border:
                1px solid #e1e8e3;

            border-radius:
                13px;

            background:
                #fafcfa;
        }


        .api-method {

            display:
                inline-block;

            padding:
                5px 9px;

            border-radius:
                6px;

            background:
                #dff4e6;

            color:
                #21703d;

            font-size:
                11px;

            font-weight:
                800;

            margin-bottom:
                12px;
        }


        .api-box code {

            display:
                block;

            font-family:
                Consolas,
                monospace;

            font-size:
                14px;

            color:
                #253a2c;

            word-break:
                break-all;
        }


        .api-box p {

            margin-top:
                8px;

            color:
                #7b847e;

            font-size:
                12px;
        }


        /* =========================
           FOOTER
        ========================= */

        footer {

            text-align:
                center;

            padding:
                28px;

            background:
                #102c20;

            color:
                white;

            margin-top:
                20px;
        }


        footer h3 {

            font-size:
                17px;

            margin-bottom:
                7px;
        }


        footer p {

            color:
                #9eaaa2;

            font-size:
                12px;
        }


        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 900px) {

            .stats {

                grid-template-columns:
                    repeat(2, 1fr);
            }

            .api-grid {

                grid-template-columns:
                    1fr;
            }

            .container {

                width:
                    92%;
            }
        }


        @media (max-width: 600px) {

            .navbar {

                padding:
                    0 5%;
            }

            .brand h2 {

                font-size:
                    17px;
            }

            .status {

                font-size:
                    11px;
            }

            .welcome h1 {

                font-size:
                    29px;
            }

            .stats {

                grid-template-columns:
                    1fr;
            }

            .section-card {

                padding:
                    20px;
            }
        }

    </style>

</head>


<body>


    <!-- =========================
         NAVBAR
    ========================== -->

    <nav class="navbar">

        <div class="brand">

            <div class="brand-icon">
                🏔️
            </div>

            <div>

                <h2>
                    Kalsubai Tourism
                </h2>

                <p>
                    TREK BOOKING MANAGEMENT SYSTEM
                </p>

            </div>

        </div>


        <div class="status">

            <span class="online"></span>

            Backend Online

        </div>

    </nav>


    <!-- =========================
         MAIN CONTAINER
    ========================== -->

    <main class="container">


        <!-- WELCOME -->

        <section class="welcome">

            <div class="label">
                BACKEND DASHBOARD
            </div>

            <h1>
                Tourism Management System
            </h1>

            <p>
                Monitor trek bookings, API services and
                backend application status.
            </p>

        </section>


        <!-- =========================
             STATISTICS
        ========================== -->

        <section class="stats">


            <div class="stat-card">

                <div class="stat-top">

                    <span class="stat-title">
                        TOTAL BOOKINGS
                    </span>

                    <div class="stat-icon">
                        📋
                    </div>

                </div>

                <div class="stat-value">
                    ${bookings.length}
                </div>

                <div class="stat-sub">
                    Registered trek bookings
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <span class="stat-title">
                        TOTAL TREKKERS
                    </span>

                    <div class="stat-icon">
                        🥾
                    </div>

                </div>

                <div class="stat-value">
                    ${totalPeople}
                </div>

                <div class="stat-sub">
                    People registered for trek
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <span class="stat-title">
                        EST. REVENUE
                    </span>

                    <div class="stat-icon">
                        ₹
                    </div>

                </div>

                <div class="stat-value">
                    ₹${totalRevenue}
                </div>

                <div class="stat-sub">
                    From current bookings
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <span class="stat-title">
                        SERVER STATUS
                    </span>

                    <div class="stat-icon">
                        🟢
                    </div>

                </div>

                <div class="stat-value">
                    Online
                </div>

                <div class="stat-sub">
                    Express.js server active
                </div>

            </div>


        </section>


        <!-- =========================
             BOOKINGS
        ========================== -->

        <section class="section-card">

            <div class="section-header">

                <div>

                    <h2>
                        Recent Trek Bookings
                    </h2>

                    <p>
                        Booking information received by
                        the Express.js backend.
                    </p>

                </div>

                <span class="count-badge">
                    ${bookings.length} Records
                </span>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Customer
                            </th>

                            <th>
                                Trek Date
                            </th>

                            <th>
                                Trekkers
                            </th>

                            <th>
                                Package
                            </th>

                            <th>
                                Amount
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${bookingRows}

                    </tbody>

                </table>

            </div>

        </section>


        <!-- =========================
             API SECTION
        ========================== -->

        <section class="section-card">

            <div class="section-header">

                <div>

                    <h2>
                        REST API Services
                    </h2>

                    <p>
                        Available backend API endpoints.
                    </p>

                </div>

            </div>


            <div class="api-grid">


                <div class="api-box">

                    <span class="api-method">
                        GET
                    </span>

                    <code>
                        /api/bookings
                    </code>

                    <p>
                        Returns all Kalsubai trek booking
                        records in JSON format.
                    </p>

                </div>


                <div class="api-box">

                    <span class="api-method">
                        GET
                    </span>

                    <code>
                        /
                    </code>

                    <p>
                        Displays the Kalsubai Tourism
                        backend dashboard.
                    </p>

                </div>


            </div>

        </section>


    </main>


    <!-- =========================
         FOOTER
    ========================== -->

    <footer>

        <h3>
            🏔️ Kalsubai Tourism
        </h3>

        <p>
            Trek Booking & Management System
            | Node.js + Express.js
        </p>

    </footer>


</body>

</html>

    `);

});


/* =========================
   BOOKING API
========================= */

app.get("/api/bookings", (req, res) => {

    res.json(bookings);

});


/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5003;

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `Kalsubai Tourism Backend running on port ${PORT}`
    );

});