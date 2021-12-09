import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserDecode } from '../../redux/authSlice';

export const Comment = (props) => {
  const { productId, name } = props;
  const [comment, setComment] = useState([]);
  const userInfo = useSelector(getUserDecode);

  useEffect(() => {
    let isCancelling = false;
    (async () => {
      try {
        const { data: apiComment } = await axios.get(
          'http://localhost:3080/api/comment/' + productId
        );

        if (isCancelling === false) {
          setComment(apiComment.productComment);
        }
      } catch (error) {}
    })();

    return () => {
      isCancelling = true;
    };
  }, [productId]);

  return (
    <section className='comment-wrap'>
      <div className='comment'>
        <div className='comment-heading'>
          <h5 className='comment-heading-text'>Bình luận về {name}</h5>
        </div>
        <form className='comment-form'>
          <div className='form-field-top'>
            <input
              type='text'
              placeholder='Họ tên *'
              required
              className='comment-form-input'
            />
            <input
              type='text'
              placeholder='Điện thoại'
              className='comment-form-input'
            />
            <input
              type='text'
              placeholder='Email'
              className='comment-form-input'
            />
          </div>
          <div className='form-field-bottom'>
            <textarea
              placeholder='Nội dung. Tối thiểu 15 ký tự'
              required
              minLength='15'
              className='comment-form-area'
            ></textarea>
          </div>
          <div className='comment-form-action'>
            <p className='comment-form-action-text'>
              <p>
                * Để gửi bình luận, bạn cần nhập tối thiểu trường họ tên và nội
                dung
              </p>
              {userInfo === null && (
                <p style={{ color: '#fd475a' }}>
                  * Bạn cần đăng nhập để bình luận!
                </p>
              )}
            </p>
            <button
              type={userInfo === null ? 'button' : 'submit'}
              className='btn comment-form-action-btn'
              style={{ cursor: userInfo === null ? 'no-drop' : 'pointer' }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Gửi bình luận</span>
            </button>
          </div>
        </form>
        <div className='comment-list'>
          {comment.length > 0 ? (
            comment.map((item) => (
              <div className='comment-list-item'>
                <div className='comment-item-media'>
                  <img
                    src={'https://hoanghamobile.com/Content/web/img/no-avt.png'}
                    alt='No avatar'
                    className='rounded-circle comment-item-img'
                  />
                </div>
                <div className='comment-item-content'>
                  <div className='comment-item-detail'>
                    <div className='comment-detail-heading'>
                      <p className='comment-detail-heading-text'>Chau Tien</p>
                      <time className='comment-detail-time'>15 phút trước</time>
                    </div>
                    <p className='comment-detail-text'>{item.content}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Chưa có bình luận!</p>
          )}
        </div>
      </div>
    </section>
  );
};
