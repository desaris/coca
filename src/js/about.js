import '/src/public/scss/about.scss';
import { useHeroSlider } from './components/about/slider';
import { useArticlesSlider } from './components/about/slider';
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
useTheme();
useBurger();
useHeroSlider();
useArticlesSlider();
