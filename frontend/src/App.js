import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    
    <>
    <div className="app-header">
      <div className="app-title">Visual Node Pipeline Builder</div>
      <div className="app-subtitle">Build and validate workflow visually</div>
    </div>
    
    <PipelineToolbar />
    <PipelineUI />
    <SubmitButton />
    </>
  );
}

export default App;
