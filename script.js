import { createElement, useState } from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';

function CircleDivisionTutorial() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    {
      title: 'Step 1: The Circle',
      description: 'We begin with a perfect circle. This represents the whole, unity, or 360 degrees of rotation.',
      render: () =>
        createElement('svg', { width: 300, height: 300 },
          createElement('circle', {
            cx: 150, cy: 150, r: 100,
            stroke: 'black', strokeWidth: 3, fill: 'none'
          })
        )
    },
    {
      title: 'Step 2: Divide into 7 Parts',
      description: 'Next, divide the circle into 7 equal parts. Each segment spans approximately 51.43 degrees (360 ÷ 7).',
      render: () => {
        const lines = [];
        for (let i = 0; i < 7; i++) {
          const angle = (2 * Math.PI * i) / 7;
          const x = 150 + 100 * Math.cos(angle);
          const y = 150 + 100 * Math.sin(angle);
          lines.push(createElement('line', {
            key: i,
            x1: 150, y1: 150, x2: x, y2: y,
            stroke: 'black'
          }));
        }
        return createElement('svg', { width: 300, height: 300 },
          createElement('circle', {
            cx: 150, cy: 150, r: 100,
            stroke: 'black', strokeWidth: 3, fill: 'none'
          }),
          ...lines
        );
      }
    },
    {
      title: 'Step 3: Label the Segments',
      description: 'We label each division. These segments are useful in sacred geometry, planetary cycles, and musical scales.',
      render: () => {
        const lines = [];
        const labels = [];
        for (let i = 0; i < 7; i++) {
          const angle = (2 * Math.PI * i) / 7;
          const x = 150 + 100 * Math.cos(angle);
          const y = 150 + 100 * Math.sin(angle);
          const lx = 150 + 115 * Math.cos(angle);
          const ly = 150 + 115 * Math.sin(angle);
          lines.push(createElement('line', {
            key: i,
            x1: 150, y1: 150, x2: x, y2: y,
            stroke: 'black'
          }));
          labels.push(createElement('text', {
            key: `label-${i}`,
            x: lx, y: ly,
            textAnchor: 'middle',
            dominantBaseline: 'middle',
            fontSize: 12
          }, i + 1));
        }
        return createElement('svg', { width: 300, height: 300 },
          createElement('circle', {
            cx: 150, cy: 150, r: 100,
            stroke: 'black', strokeWidth: 3, fill: 'none'
          }),
          ...lines,
          ...labels
        );
      }
    }
  ];

  const { title, description, render: RenderSVG } = steps[step - 1];

  return createElement('div', { style: { textAlign: 'center', padding: 20 } },
    createElement('h2', null, title),
    createElement('p', null, description),
    RenderSVG(),
    createElement('div', { style: { marginTop: 20 } },
      createElement('button', { onClick: prevStep, disabled: step === 1 }, 'Back'),
      createElement('button', { onClick: nextStep, disabled: step === steps.length, style: { marginLeft: 10 } }, 'Next')
    )
  );
}

render(createElement(CircleDivisionTutorial), document.getElementById('root'));
