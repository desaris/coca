import '/src/public/scss/main.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
    useInsightSlider,
    useTestimonialsSlider,
} from './components/home/slider.js';
useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
