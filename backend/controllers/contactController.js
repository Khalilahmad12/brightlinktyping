import { contactsStore } from '../models/store.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required.'
      });
    }

    const newContact = {
      id: `ct-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service || 'General Visa Inquiry',
      message: message ? message.trim() : '',
      status: 'New',
      createdAt: new Date().toISOString()
    };

    contactsStore.unshift(newContact);

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. Our Dubai immigration consultant will contact you within 30 minutes.',
      data: newContact
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process contact submission: ' + error.message
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      count: contactsStore.length,
      data: contactsStore
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts: ' + error.message
    });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = contactsStore.find(c => c.id === id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    if (status) contact.status = status;

    return res.status(200).json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const index = contactsStore.findIndex(c => c.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    contactsStore.splice(index, 1);
    return res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
