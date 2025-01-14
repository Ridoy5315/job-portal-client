import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const useJobs = (sort, search, minSalary, maxSalary) => {
     const [jobs, setJobs] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          axios.get(`https://job-portal-27e9b.web.app/job?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
          .then(res => {
               setLoading(false);
               setJobs(res.data);
          });
     }, [sort, search, minSalary, maxSalary])
     return {jobs, loading};
};

useJobs.propTypes = {
     
};

export default useJobs;