import React from 'react';
import Joyride from 'react-joyride';

const Tour = ({ run, steps }) => {
  const joyrideStyles = `
    .react-joyride__tooltip {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 30px;
      padding: 30px 35px;
      position: relative;
      box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
      overflow: visible;
    }

    .react-joyride__tooltip__content {
      position: relative;
    }

    /* Estilos para el contenido del tooltip */
    .react-joyride__tooltip__header {
      margin-bottom: 15px;
    }

    .react-joyride__tooltip__body {
      color: white;
      font-size: 16px;
      line-height: 1.6;
    }

    .react-joyride__tooltip__footer {
      margin-top: 20px;
    }

    /* Botones personalizados */
    .react-joyride__tooltip__button {
      background: white;
      color: #667eea;
      border: none;
      border-radius: 20px;
      padding: 10px 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-left: 10px;
    }

    .react-joyride__tooltip__button:hover {
      background: #f0f0f0;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .react-joyride__tooltip__button--primary {
      background: #ffd700;
      color: #333;
    }

    .react-joyride__tooltip__button--primary:hover {
      background: #ffed4e;
    }

    .react-joyride__tooltip__button--skip {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .react-joyride__tooltip__button--skip:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Flecha del tooltip */
    .react-joyride__tooltip__arrow {
      filter: drop-shadow(0 10px 20px rgba(102, 126, 234, 0.3));
    }

    /* Animación suave */
    .react-joyride__tooltip {
      animation: cloudFloat 3s ease-in-out infinite;
    }

    @keyframes cloudFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    /* Progress bar personalizado */
    .react-joyride__progress {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      height: 6px;
      margin-top: 15px;
    }

    .react-joyride__progress__bar {
      background: #ffd700;
      border-radius: 10px;
    }
  `;

  return (
    <>
      <style>{joyrideStyles}</style>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        locale={{
          back: 'Atrás',
          close: 'Cerrar',
          last: 'Finalizar',
          next: 'Siguiente',
          skip: 'Saltar',
        }}
        styles={{
          options: {
            arrowColor: '#667eea',
            backgroundColor: 'transparent',
            primaryColor: '#1b9640',
            textColor: 'white',
            width: 400,
            zIndex: 10000,
          },
          tooltip: {
            backgroundColor: 'transparent',
          },
          tooltipContent: {
            padding: '0',
          },
          buttonNext: {
            outline: 'none',
          },
          buttonBack: {
            outline: 'none',
            marginRight: 10,
          },
          buttonSkip: {
            outline: 'none',
          },
        }}
      />
    </>
  );
};

export default Tour;