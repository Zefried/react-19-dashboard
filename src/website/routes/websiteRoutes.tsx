import type { RouteObject } from 'react-router-dom';
import { WebsiteLayout } from '../layouts/WebsiteLayout';
import { HomePage } from '../pages/Home/HomePage';
import { OurStoryPage } from '../pages/OurStory/OurStoryPage';
import { HeritageHousePage } from '../pages/HeritageHouse/HeritageHousePage';
import { GardenPage } from '../pages/Garden/GardenPage';
import { ExperiencesPage } from '../pages/Experiences/ExperiencesPage';
import { DiscoverDibrugarhPage } from '../pages/DiscoverDibrugarh/DiscoverDibrugarhPage';
import { VisitUsPage } from '../pages/VisitUs/VisitUsPage';

export const websiteRoutes: RouteObject[] = [
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'our-story',
        element: <OurStoryPage />,
      },
      {
        path: 'story',
        element: <OurStoryPage />,
      },
      {
        path: 'the-heritage-house',
        element: <HeritageHousePage />,
      },
      {
        path: 'heritage-house',
        element: <HeritageHousePage />,
      },
      {
        path: 'cottages',
        element: <HeritageHousePage />,
      },
      {
        path: 'garden',
        element: <GardenPage />,
      },
      {
        path: 'experiences',
        element: <ExperiencesPage />,
      },
      {
        path: 'experience',
        element: <ExperiencesPage />,
      },
      {
        path: 'discover-dibrugarh',
        element: <DiscoverDibrugarhPage />,
      },
      {
        path: 'dibrugarh',
        element: <DiscoverDibrugarhPage />,
      },
      {
        path: 'visit-us',
        element: <VisitUsPage />,
      },
      {
        path: 'visit',
        element: <VisitUsPage />,
      },
      {
        path: 'plan-your-visit',
        element: <VisitUsPage />,
      },
    ],
  },
];
