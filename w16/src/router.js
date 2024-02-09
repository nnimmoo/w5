
import AddPage from "./pages/AddPage";
import RedactPage from "./pages/RedactPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";


export const router = [
    {
        element: <MainPage />, // Pass your character data here
        path: '/',
    },
    {
        element: <AddPage />, // Pass your character data here
        path: '/add',
    },
    {
        element: <RedactPage />,
        path: '/redact/:id',
    },
    {
        element: <ErrorPage />,
        path: '*',
    },
];
