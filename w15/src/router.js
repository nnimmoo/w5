
// router.js
// router.js
import MainPage from "./pages/MainPage";
import FactPage from "./pages/FactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterData from "./CharacterData";
export const router = [
    {
        element: <MainPage character={CharacterData} />, // Pass your character data here
        path: '/',
    },
    {
        element: <AboutPage character={CharacterData} />, // Pass your character data here
        path: '/about',
    },
    {
        element: <FactPage />,
        path: '/:factId',
    },
    {
        element: <ErrorPage />,
        path: '*',
    },
];
