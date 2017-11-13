import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';
import ExportUserSettings from './ExportUserSettings';
import ImportUserSettings from './ImportUserSettings';

class AudioSettings extends React.PureComponent<{}, never> {
  public render() {
    return (
      <Layout.AnnotatedSection
        title="Backup Your Settings"
        description={`You 
      can download all of your settings as a single file to keep them backed up.`}
      >
        <Card>
          <Card.Section>
            <ExportUserSettings />
          </Card.Section>
          <Card.Section>
            <ImportUserSettings />
          </Card.Section>
        </Card>
      </Layout.AnnotatedSection>
    );
  }
}

export default AudioSettings;

/* description={`Backing up and restoring your settings is simple and fast. 
        Settings can be shared between browsers and devices.`} */