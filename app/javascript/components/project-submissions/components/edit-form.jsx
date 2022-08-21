import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { func, object } from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from '../schemas/project-submission-schema';
import Toggle from './toggle';

const EditForm = ({
  submission, onSubmit, onClose, onDelete,
}) => {
  const [isToggled, setIsToggled] = useState(submission.is_public);
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      repo_url: submission.repo_url,
      live_preview_url: submission.live_preview_url,
      is_public: submission.is_public,
    },
  });

  const {
    errors,
  } = formState;

  const handleOnClickToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleDelete = () => {
    onDelete(submission.id);
    onClose();
  };

  const handleSubmitCallback = async (data) => (
    onSubmit({ ...data, is_public: isToggled })
  );

  if (formState.isSubmitSuccessful) {
    return (
      <div className="text-center">
        <h1 className="page-heading-title">Thanks for Updating Your Solution!</h1>
        <button
          type="button"
          className="button button--primary"
          onClick={onClose}
          data-test-id="close-btn"
        >
          Close
        </button>
      </div>
    );
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div data-test-id="edit-form">
      <h1 className="text-center page-heading-title">Edit Your Project</h1>

      <form className="form" onSubmit={handleSubmit(handleSubmitCallback)}>
        <input type="hidden" {...register('id')} value={submission.id} />
        <input type="hidden" {...register('lesson_id')} value={submission.lesson_id} />

        <div class="flex flex-col space-y-4">
          <div>
            <label htmlFor="repo_url" className="block text-sm font-medium text-gray-700 text-left">Github repository url</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-700 fab fa-github" />
              </div>
              <input
                type="url"
                autoFocus
                id="repo_url"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 border-gray-300 rounded-md"
                placeholder="https://github.com/..."
                data-test-id="repo-url-field"
                {...register('repo_url')}
              />
            </div>
            {errors.repo_url && (
            <div className="form-error" data-test-id="error-message">
              {' '}
              {errors.repo_url.message}
            </div>
            )}
          </div>

          { submission.lesson_has_live_preview
            && (
            <Fragment>
              <div className="">
                <label htmlFor="live_preview_url" className="block text-sm font-medium text-gray-700 text-left">Live preview url</label>
                <div className="mt-1 relative rounded-md shadow-sm ">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-700 fas fa-link" />
                  </div>
                  <input
                    type="url"
                    id="live_preview_url"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 border-gray-300 rounded-md"
                    placeholder="https://livepreview.com"
                    data-test-id="live-preview-url-field"
                    {...register('live_preview_url')}
                  />
                </div>
                { errors.live_preview_url && (
                <div className="form-error" data-test-id="error-message">
                  {' '}
                  {errors.live_preview_url.message}
                </div>
                ) }
              </div>
            </Fragment>
          )}
        </div>

        <div className="form-section form-section-center mb-0">
          <Toggle
            label="MAKE SOLUTION PUBLIC"
            onClick={handleOnClickToggle}
            isToggled={isToggled}
          />

          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="button button--danger sm:mr-2"
              onClick={handleDelete}
              data-test-id="delete-btn"
            >
              Delete
            </button>
            <button
              disabled={formState.isSubmitting}
              type="submit"
              className="button button--primary mt-2 sm:mt-0"
              data-test-id="submit-btn"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

EditForm.propTypes = {
  submission: object.isRequired,
  onSubmit: func.isRequired,
  onClose: func.isRequired,
  onDelete: func.isRequired,
};

export default EditForm;
