import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TagApi } from "../../../api/TagApi";
import { useDispatch } from "react-redux";
import ResearchIcon from "../../../assets/icons/ResearchIcon";
import EducationIcon from "../../../assets/icons/EducationIcon";
import LowCodeIcon from "../../../assets/icons/LowCodeIcon";
import WorkflowsIcon from "../../../assets/icons/WorkflowsIcon";
import MarketingIcon from "../../../assets/icons/MarketingIcon";
import VideoEditingIcon from "../../../assets/icons/VideoEditingIcon";
import AIAgentsIcon from "../../../assets/icons/AIAgentsIcon";
import PersonalAssistantIcon from "../../../assets/icons/PersonalAssistantIcon";
import MusicIcon from "../../../assets/icons/MusicIcon";
import TranslatorIcon from "../../../assets/icons/TranslatorIcon";
import { useTranslation } from "react-i18next";
import './AiCategoryStyles.css';

// Importamos los nuevos componentes y hooks de carga
import LoadingSpinner from "../../Loader/LoadingSpinner";
import useLoading from "../../../hooks/useLoading";

const AiCategory = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  
  // Usamos nuestro hook para manejar el estado de carga
  const { loading, withLoading } = useLoading("home-categories");
  
  const [particles, setParticles] = useState([]);
  const [lines, setLines] = useState([]);

  // Generar partículas y líneas para el fondo
  useEffect(() => {
    // Crear partículas
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        size: Math.random() * 3 + 2 + 'px',
        animationDuration: Math.random() * 5 + 10 + 's',
        animationDelay: Math.random() * 5 + 's'
      });
    }
    setParticles(newParticles);

    // Crear líneas
    const newLines = [];
    for (let i = 0; i < 12; i++) {
      newLines.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: Math.random() * 200 + 50 + 'px',
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDuration: Math.random() * 8 + 10 + 's',
        animationDelay: Math.random() * 5 + 's'
      });
    }
    setLines(newLines);
  }, []);

  useEffect(() => {
    withLoading(async () => {
      try {
        const response = await TagApi.getAllCategories();
        setCategories(response);
      } catch (err) {
        setError("Failed to fetch categories");
      }
    });
  }, [withLoading]);

  const gotools = (target) => {
    // Actualizamos los filtros
    dispatch({ type: 'CHANGE_FILTERS', selectedCategories: [target] });
    // Eliminamos el filtro de prompt cuando se selecciona una categoría
    dispatch({ type: 'CHANGE_FILTERS', prompt: '' });
    // Vamos a buscar las tools
    dispatch({ type: 'set', refreshTools: true });

    navigate("/tools");
  }

  // Función para renderizar el icono adecuado según la categoría
  const renderCategoryIcon = (category) => {
    switch (category.name) {
      case "Research":
        return <ResearchIcon className="category-icon" />;
      case "Education":
        return <EducationIcon className="category-icon" />;
      case "Low-Code/No-Code":
        return <LowCodeIcon className="category-icon" />;
      case "Workflows":
        return <WorkflowsIcon className="category-icon" />;
      case "Marketing":
        return <MarketingIcon className="category-icon" />;
      case "Video Editing":
        return <VideoEditingIcon className="category-icon" />;
      case "AI Agents":
        return <AIAgentsIcon className="category-icon" />;
      case "Personal Assistant":
        return <PersonalAssistantIcon className="category-icon" />;
      case "Music":
        return <MusicIcon className="category-icon" />;
      case "Translator":
        return <TranslatorIcon className="category-icon" />;
      default:
        return <img 
                 src={category.imageUrl ?? "https://i.ibb.co/t3hXkN6/Icon10.png"} 
                 alt="" 
                 className="category-icon" 
               />;
    }
  };

  // Componente de esqueleto para las tarjetas de categoría
  const CategorySkeleton = () => (
    <div className="category-card skeleton">
      <div className="category-icon-container">
        <div className="icon-glow"></div>
        <div className="skeleton-icon"></div>
      </div>
      <div className="skeleton-title"></div>
    </div>
  );

  return (
    <div className="ai-categories-container">
      {/* Partículas de fondo */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="category-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `iconPulse ${particle.animationDuration} infinite alternate ${particle.animationDelay}`
          }}
        />
      ))}
      
      {/* Líneas de conexión */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="category-line"
          style={{
            left: line.left,
            top: line.top,
            width: line.width,
            transform: line.transform,
            animation: `iconPulse ${line.animationDuration} infinite alternate ${line.animationDelay}`
          }}
        />
      ))}
      
      <h2 className="ai-categories-title">
        {t('categories.explore_ai_tools') || "Explora las herramientas de IA"}
      </h2>
      
      {/* Spinner de carga que se muestra cuando se cargan las categorías */}
      {loading && (
        <div className="flex justify-center mb-6">
          <LoadingSpinner variant="primary" text={t('common.loading_categories', 'Cargando categorías...')} />
        </div>
      )}
      
      <div className="categories-grid">
        {loading ? (
          // Mostrar skeletons durante la carga
          <>
            {[...Array(8)].map((_, index) => (
              <CategorySkeleton key={`skeleton-${index}`} />
            ))}
          </>
        ) : categories?.length > 0 ? (
          // Mostrar categorías una vez cargadas
          categories.map((category, index) => (
            <div
              onClick={() => gotools(category.name)}
              key={index}
              className="category-card"
            >
              <div className="category-icon-container">
                <div className="icon-glow"></div>
                {renderCategoryIcon(category)}
              </div>
              <h3 className="category-title">
                {category.name}
              </h3>
            </div>
          ))
        ) : error ? (
          // Mostrar error si no se pudieron cargar las categorías
          <div className="error-message">
            {t('common.error_loading', 'Error al cargar las categorías')}
          </div>
        ) : (
          <div className="no-categories">
            {t('categories.no_categories', 'No hay categorías disponibles')}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiCategory;
