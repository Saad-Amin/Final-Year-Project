import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import RejectedCandidates from "./pages/RejectedCandidates/RejectedCandidates";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import PassedCandidates  from "./pages/PassedCandidates/PassedCandidates";
import FailedCandidates from "./pages/FailedCandidates/FailedCandidates";
import Jobs from "./pages/Jobs/Jobs";
import Otpverification from "./pages/auth/Otpverification";
import SignUp from "./pages/auth/SignUp";
import PostaJob from "./pages/PostaJob/PostaJob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<Otpverification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<MainLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="postajob" element={<PostaJob />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="failedcandidates" element={<FailedCandidates />} />
        <Route path="passedcandidates" element={<PassedCandidates />} />
        <Route path="rejectedcandidates" element={<RejectedCandidates />} />
      </Route>
      <Route path="*" element={<Blank />} />
    </Routes>
  );
}

export default App;
