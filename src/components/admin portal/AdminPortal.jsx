import React from 'react';
import axios from 'axios';

const AdminPortal = () => {
    const [state, setState] = React.useState({

    });

    const handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/add_business/', state)
            .then(response => {
                // Redirect to a success page or do something else on successful submission
            })
            .catch(error => {
                // Handle submission error
            });
    }

   
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Business</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Business Name</label>
                            <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Name" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="sr-only">Address</label>
                            <input id="address" name="address" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Address" onChange={this.handleChange}/>
                        </div>
                        {/* Add more fields */}
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add Business
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AdminPortal;
