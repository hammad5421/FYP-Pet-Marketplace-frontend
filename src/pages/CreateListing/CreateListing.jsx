import React, { useCallback, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePetListing = () => {
  const [formData, setFormData] = useState({
    // all other fields...
    imageUrl: '' // Single image URL
  });

  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);

    setFormData({
      ...formData,
      imageUrl: file,
    });
  }, [formData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error('Please log in first');
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:8000/api/pet/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      console.log('Success:', response.data);
      setSuccess(true);
      toast.success('Pet added successfully!');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toast.error('Failed to add pet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Create Pet Listing</h2>
        {loading && <div className="text-center mb-4">Loading...</div>}
        {success && (
          <div className="text-center mb-4 text-green-600 font-bold">Pet added successfully!</div>
        )}
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { id: 'petName', label: 'Pet Name', type: 'text', placeholder: 'Enter pet name' },
              { id: 'category', label: 'Category', type: 'select', options: ['Select Category', 'Dogs', 'Cats'] },
              { id: 'breed', label: 'Breed', type: 'text', placeholder: 'Enter breed' },
              { id: 'gender', label: 'Gender', type: 'select', options: ['Select Gender','Male', 'Female'] },
              { id: 'age', label: 'Age', type: 'number' },
              { id: 'price', label: 'Price', type: 'number', placeholder: '0.00' },
              { id: 'description', label: 'Description', type: 'text', placeholder: 'Enter description' },
              { id: 'vaccinationStatus', label: 'Vaccination Status', type: 'text', placeholder: 'Enter vaccination status' },
              { id: 'neuteredSpayedStatus', label: 'Neutered/Spayed Status', type: 'text', placeholder: 'Enter neutered/spayed status' },
              { id: 'healthConditions', label: 'Health Conditions', type: 'text', placeholder: 'Enter health conditions' },
              { id: 'temperament', label: 'Temperament', type: 'text', placeholder: 'Enter temperament' },
              { id: 'breedInformation', label: 'Breed Information', type: 'text', placeholder: 'Enter breed information' },
              { id: 'training', label: 'Training', type: 'text', placeholder: 'Enter training details' },
              { id: 'diet', label: 'Diet', type: 'text', placeholder: 'Enter diet details' },
              { id: 'size', label: 'Size', type: 'text', placeholder: 'Enter size' },
              { id: 'color', label: 'Color', type: 'text', placeholder: 'Enter color' },
              { id: 'coatType', label: 'Coat Type', type: 'text', placeholder: 'Enter coat type' },
              { id: 'energyLevel', label: 'Energy Level', type: 'text', placeholder: 'Enter energy level' },
              { id: 'goodWithKids', label: 'Good With Kids', type: 'text', placeholder: 'Yes/No' },
              { id: 'goodWithOtherPets', label: 'Good With Other Pets', type: 'text', placeholder: 'Yes/No' },
              { id: 'history', label: 'History', type: 'text', placeholder: 'Enter history' },
              { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter location' }
            ].map(({ id, label, type, options, ...rest }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
                {type === 'select' ? (
                  <select
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                ) : (
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...rest}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { id: 'contactEmail', label: 'Email', type: 'email' },
              { id: 'contactPhone', label: 'Phone Number', type: 'text' },
              { id: 'fullName', label: 'Full Name', type: 'text' },
              { id: 'streetAddress', label: 'Street Address', type: 'text' },
            ].map(({ id, label, type, ...rest }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...rest}
                />
              </div>
            ))}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
            <div {...getRootProps({ className: 'border-dashed border-2 border-gray-300 p-4 text-center' })}>
              <input {...getInputProps()} name="imageUrl" />
              <p>Drag 'n' drop an image here, or click to select one</p>
            </div>
            {preview && (
              <div className="mt-4 text-center">
                <img src={preview} alt="Image Preview" className="w-full h-auto max-w-xs mx-auto" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePetListing;
