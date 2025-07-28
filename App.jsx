import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminUsers from './pages/AdminUsers';
import ApplyJob from './pages/ApplyJob';
import PostTender from './pages/PostTender';
import SubmitTenderBid from './pages/SubmitTenderBid';
import ReviewBids from './pages/ReviewBids';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/post-tender" element={<PostTender />} />
        <Route path="/submit-bid" element={<SubmitTenderBid />} />
        <Route path="/review-bids" element={<ReviewBids />} />
      </Routes>
    </Router>
  );
}

export default App;