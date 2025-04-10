import { dcToken_backend } from 'declarations/dcToken_backend';
import jsPDF from 'jspdf';

export const handleDownloadPDF = async (userId) => {
  const response = await dcToken_backend.read(userId);

  if (!response || response.length === 0) {
    alert("User not found");
    return;
  }

  const userData = response[0];

  const { firstname, lastname, active } = userData;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("User Details", 20, 20);

  doc.setFontSize(12);
  doc.text(`First Name: ${firstname}`, 20, 40);
  doc.text(`Last Name: ${lastname}`, 20, 50);
  doc.text(`Status: ${active}`, 20, 60);

  doc.save(`user_details_download-${userId}.pdf`);
};
