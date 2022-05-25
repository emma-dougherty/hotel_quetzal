use hotel_quetzal_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Raul Hernandez",
        email: "raul@gmail.com",
        check_in_status: true
    },
    {
        name: "Maria Gonzalez",
        email: "mariag@hotmail.com",
        check_in_status: true
    },
    {
        name: "Hamish McDuff",
        email: "crazy_squirel@mac.com",
        check_in_status: false
    },
])