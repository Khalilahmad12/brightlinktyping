import { inquiriesStore } from '../models/store.js';

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, service, urgency, emirate, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and phone number are required for consultation scheduling.'
      });
    }

    const newInquiry = {
      id: `inq-${Date.now()}`,
      name: name.trim(),
      email: email ? email.trim().toLowerCase() : '',
      phone: phone.trim(),
      service: service || 'Visa Consultation',
      urgency: urgency || 'Standard (3-5 days)',
      emirate: emirate || 'Dubai',
      message: message ? message.trim() : '',
      status: 'Pending Review',
      createdAt: new Date().toISOString()
    };

    inquiriesStore.unshift(newInquiry);

    return res.status(201).json({
      success: true,
      message: 'Consultation appointment scheduled successfully. A representative from Crystal Tower, Business Bay will reach out promptly.',
      data: newInquiry
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to record inquiry: ' + error.message
    });
  }
};

export const getInquiries = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      count: inquiriesStore.length,
      data: inquiriesStore
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries: ' + error.message
    });
  }
};

export const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const inquiry = inquiriesStore.find(i => i.id === id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    if (status) inquiry.status = status;

    return res.status(200).json({
      success: true,
      message: 'Inquiry status updated',
      data: inquiry
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
