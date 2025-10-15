import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ProjectEditor from '../../../Components/ProjectEditor';
import PropertiesSidebar from '../../../Components/PropertiesSidebar';
import WorkSpace from '../../../Components/WorkSpace';

function EditorPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [propertiesSidebarOpen, setPropertiesSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showProjectEditor, setShowProjectEditor] = useState(true);
  const [workSpaceContent, setWorkSpaceContent] = useState(null);

  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleEditorClose = () => {
    setShowProjectEditor(false);
  };

  const handleWorkSpaceElementSelect = (element) => {
    setSelectedComponent(element);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      <Box
        component="main"
        sx={{
          flex: 1,
          marginRight: propertiesSidebarOpen ? '320px' : 0,
          transition: 'margin-right 0.3s ease',
        }}
      >
        {showProjectEditor && (
          <ProjectEditor
            onClose={handleEditorClose}
            onBackToDashboard={handleBackToDashboard}
            onComponentSelect={handleComponentSelect}
          />
        )}

        <WorkSpace 
          pt={showProjectEditor ? 0 : 11} 
          onElementSelect={handleWorkSpaceElementSelect}
        >
          {workSpaceContent}
        </WorkSpace>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          right: 0,
          top: '66px',
          height: 'calc(100vh - 66px)',
          width: propertiesSidebarOpen ? '320px' : 0,
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <PropertiesSidebar
            open={propertiesSidebarOpen}
            onClose={() => setPropertiesSidebarOpen(false)}
            selectedComponent={selectedComponent}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default EditorPage;