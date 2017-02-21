import { Components, registerComponent, getRawComponent, getFragment, withMessages } from 'meteor/nova:core';
import Posts from "meteor/nova:posts";
import React, { PropTypes, Component } from 'react';
import { intlShape } from 'react-intl';
import { withRouter } from 'react-router';

export const PostsNewForm = (props, context) => {
  return (
    <Components.ShowIf
      check={Posts.options.mutations.new.check}
      failureComponent={<Components.UsersAccountForm />}
    >
      <div className="posts-new-form">
        <Components.SmartForm
          collection={Posts}
          successCallback={__ => __}
        />
      </div>
    </Components.ShowIf>
  );
};

PostsNewForm.displayName = "PostsNewForm";
