import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Layout from "./structure";
import TextCompare from "./pageComponents/textCompare/textCompare";
import VoiceText from "./pageComponents/voiceText";
import TextVoice from "./pageComponents/TextVoice";
import PdfTools from "./pageComponents/PDFConvertation";
import Spelling from "./pageComponents/spelling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="textCompare" replace />} />
          <Route path="spelling" element={<Spelling />} />
          <Route path="textCompare" element={<TextCompare />} />
          <Route path="voiceText" element={<VoiceText />} />
          <Route path="TextVoice" element={<TextVoice />} />
          <Route path="pdf" element={<PdfTools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
