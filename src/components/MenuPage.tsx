"use client";

import { useState, useEffect, useRef } from "react";
import { foodCategories, foodMenuItems, drinkCategories, drinkMenuItems, MenuItem } from "@/data/menuData";

type MenuType = "food" | "drinks";

export default function MenuPage() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("food");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [hasMoreContent, setHasMoreContent] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const navListRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      const element = categoryRefs.current[categoryId];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsPanelOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (!isPanelOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePanel();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isPanelOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const categories = activeMenu === "food" ? foodCategories : drinkCategories;

      for (const category of categories) {
        const element = categoryRefs.current[category];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategoryId(category);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu]);

  useEffect(() => {
    const checkScrollable = () => {
      const navElement = navListRef.current;
      if (navElement) {
        const hasScroll = navElement.scrollHeight > navElement.clientHeight;
        const isScrolledToBottom =
          navElement.scrollTop + navElement.clientHeight >=
          navElement.scrollHeight - 10;
        setHasMoreContent(hasScroll && !isScrolledToBottom);
      }
    };

    checkScrollable();
    const navElement = navListRef.current;
    if (navElement) {
      navElement.addEventListener("scroll", checkScrollable, { passive: true });
      const resizeObserver = new ResizeObserver(checkScrollable);
      resizeObserver.observe(navElement);
      return () => {
        navElement.removeEventListener("scroll", checkScrollable);
        resizeObserver.disconnect();
      };
    }
  }, [activeMenu]);

  const handleNavClick = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="menu-page-section">
        <div className="menu-page-container">
          <h1 className="menu-page-headline">Arta Gustului.</h1>

          <div className="menu-toggles">
            <button
              className={`menu-toggle ${activeMenu === "food" ? "active" : ""}`}
              onClick={() => {
                setActiveMenu("food");
                setExpandedCategory(null);
                setActiveCategoryId(null);
              }}
            >
              MÂNCARE
            </button>
            <button
              className={`menu-toggle ${activeMenu === "drinks" ? "active" : ""}`}
              onClick={() => {
                setActiveMenu("drinks");
                setExpandedCategory(null);
                setActiveCategoryId(null);
              }}
            >
              BĂUTURI
            </button>
          </div>

          {activeMenu === "food" && (
            <div className="menu-content">
              <div className="menu-nav-desktop" ref={navListRef}>
                <nav className="menu-nav-list">
                  {foodCategories.map((category) => (
                    <button
                      key={category}
                      className={`menu-nav-item ${
                        activeCategoryId === category ? "active" : ""
                      }`}
                      onClick={() => handleNavClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
                {hasMoreContent && (
                  <div className="menu-nav-scroll-indicator">
                    <div className="scroll-indicator-fade"></div>
                    <div className="scroll-indicator-arrow">↓</div>
                  </div>
                )}
              </div>

              <div className="menu-items-container">
                {foodCategories.map((category) => {
                  const categoryItems = foodMenuItems.filter(
                    (item) => item.category === category
                  );

                  if (categoryItems.length === 0) return null;

                  return (
                    <div
                      key={category}
                      ref={(el) => {
                        categoryRefs.current[category] = el;
                      }}
                      className="menu-category-section"
                    >
                      <button
                        className="menu-category-title-mobile"
                        onClick={() => handleCategoryClick(category)}
                      >
                        <h2 className="category-title-text">{category}</h2>
                        <span className="category-toggle-icon">
                          {expandedCategory === category ? "−" : "+"}
                        </span>
                      </button>

                      <h2 className="menu-category-title-desktop">
                        {category}
                      </h2>

                      <div
                        className={`menu-items-list ${
                          expandedCategory === category ? "expanded" : ""
                        }`}
                      >
                        {categoryItems.map((item) => (
                          <div key={item.id} className="menu-item">
                            <div className="menu-item-header">
                              <h3 className="menu-item-name">{item.name}</h3>
                            <span className="menu-item-price">
                              {item.price}
                            </span>
                            </div>
                            <p className="menu-item-description">
                              {item.description}
                            </p>
                            <button
                              className="menu-item-details-link"
                              onClick={() => handleItemClick(item)}
                            >
                              DETALII & ALERGENI
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

              {activeMenu === "drinks" && (
                <div className="menu-content">
                  <div className="menu-nav-desktop">
                    <nav className="menu-nav-list">
                      {drinkCategories.map((category) => (
                        <button
                          key={category}
                          className={`menu-nav-item ${
                            activeCategoryId === category ? "active" : ""
                          }`}
                          onClick={() => handleNavClick(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </nav>
                  </div>

                  <div className="menu-items-container">
                    {drinkCategories.map((category) => {
                      const categoryItems = drinkMenuItems.filter(
                        (item) => item.category === category
                      );

                      if (categoryItems.length === 0) return null;

                      return (
                        <div
                          key={category}
                          ref={(el) => {
                            categoryRefs.current[category] = el;
                          }}
                          className="menu-category-section"
                        >
                          <button
                            className="menu-category-title-mobile"
                            onClick={() => handleCategoryClick(category)}
                          >
                            <h2 className="category-title-text">{category}</h2>
                            <span className="category-toggle-icon">
                              {expandedCategory === category ? "−" : "+"}
                            </span>
                          </button>

                          <h2 className="menu-category-title-desktop">
                            {category}
                          </h2>

                          <div
                            className={`menu-items-list ${
                              expandedCategory === category ? "expanded" : ""
                            }`}
                          >
                            {categoryItems.map((item) => (
                              <div key={item.id} className="menu-item">
                                <div className="menu-item-header">
                                  <h3 className="menu-item-name">{item.name}</h3>
                                  <span className="menu-item-price">
                                    {item.price}
                                  </span>
                                </div>
                                <p className="menu-item-description">
                                  {item.description}
                                </p>
                                <button
                                  className="menu-item-details-link"
                                  onClick={() => handleItemClick(item)}
                                >
                                  DETALII & ALERGENI
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
        </div>
      </section>

      {isPanelOpen && selectedItem && (
        <div className="menu-details-overlay" onClick={closePanel}>
          <div
            className="menu-details-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="menu-details-close"
              onClick={closePanel}
              aria-label="Close"
            >
              ×
            </button>

            <div className="menu-details-content">
              <h4 className="menu-details-name">{selectedItem.name}</h4>

              {selectedItem.details?.englishSummary && (
                <p className="menu-details-english">
                  {selectedItem.details.englishSummary}
                </p>
              )}

              {selectedItem.details?.weight && (
                <div className="menu-details-meta">
                  <span className="menu-details-label">Greutate:</span>
                  <span className="menu-details-value">{selectedItem.details.weight}</span>
                </div>
              )}

              {selectedItem.details?.allergens && selectedItem.details.allergens.length > 0 && (
                <div className="menu-details-meta">
                  <span className="menu-details-label">Alergeni:</span>
                  <span className="menu-details-value">
                    {selectedItem.details.allergens.join(", ")}
                  </span>
                </div>
              )}

              {selectedItem.details?.fullIngredients && selectedItem.details.fullIngredients.length > 0 && (
                <div className="menu-details-meta">
                  <span className="menu-details-label">Ingrediente:</span>
                  <div className="menu-details-ingredients">
                    {selectedItem.details.fullIngredients.map((ingredient, index, array) => (
                      <span key={index} className="ingredient-item">
                        {ingredient}
                        {index < array.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(selectedItem.details?.notes && selectedItem.details.notes.length > 0) || selectedItem.details?.spiceLevel && (
                <div className="menu-details-meta">
                  {selectedItem.details.notes && selectedItem.details.notes.length > 0 && (
                    <div className="menu-details-notes">
                      {selectedItem.details.notes.map((note, index) => (
                        <span key={index} className="note-badge">
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                  {selectedItem.details.spiceLevel && (
                    <div className="menu-details-spice">
                      <span className="spice-label">{selectedItem.details.spiceLevel}</span>
                    </div>
                  )}
                </div>
              )}

              {selectedItem.details?.nutrition && (
                <div className="menu-details-nutrition">
                  <h5 className="nutrition-title">Informații Nutriționale</h5>
                  <div className="nutrition-grid">
                    {selectedItem.details.nutrition.calories && (
                      <div className="nutrition-item">
                        <span className="nutrition-label">V. e. (kcal):</span>
                        <span className="nutrition-value">
                          {selectedItem.details.nutrition.calories}
                        </span>
                      </div>
                    )}
                    {selectedItem.details.nutrition.carbs && (
                      <div className="nutrition-item">
                        <span className="nutrition-label">Carb (gr):</span>
                        <span className="nutrition-value">
                          {selectedItem.details.nutrition.carbs}
                        </span>
                      </div>
                    )}
                    {selectedItem.details.nutrition.fats && (
                      <div className="nutrition-item">
                        <span className="nutrition-label">Grasimi (gr):</span>
                        <span className="nutrition-value">
                          {selectedItem.details.nutrition.fats}
                        </span>
                      </div>
                    )}
                    {selectedItem.details.nutrition.proteins && (
                      <div className="nutrition-item">
                        <span className="nutrition-label">Proteine (gr):</span>
                        <span className="nutrition-value">
                          {selectedItem.details.nutrition.proteins}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

