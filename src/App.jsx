import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./structure";
import TextCompare from "./pageComponents/textCompare";
import VoiceText from "./pageComponents/voiceText";
import TextVoice from "./pageComponents/TextVoice";
import PdfTools from "./pageComponents/PDFConvertation";
import Spelling from "./pageComponents/spelling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
